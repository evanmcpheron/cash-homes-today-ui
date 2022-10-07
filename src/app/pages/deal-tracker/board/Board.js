import withReducer from "app/store/withReducer";
import { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import withRouter from "@fuse/core/withRouter";
import { useDeepCompareEffect } from "@fuse/hooks";
import FusePageSimple from "@fuse/core/FusePageSimple";
import useThemeMediaQuery from "@fuse/hooks/useThemeMediaQuery";
import reducer from "../store";
import {
  getBoard,
  reorderCard,
  reorderList,
  resetBoard,
  selectBoard,
} from "../store/boardSlice";
import BoardAddList from "./board-list/BoardAddList";
import BoardList from "./board-list/BoardList";
import BoardCardDialog from "./dialogs/card/BoardCardDialog";
import BoardSettingsSidebar from "./sidebars/settings/BoardSettingsSidebar";
import { getCards } from "../store/cardsSlice";
import { getLists } from "../store/listsSlice";
import { getLabels } from "../store/labelsSlice";
import LabelModal from "./LabelModal";
import MembersModal from "./MembersModal";
import BoardHeader from "./BoardHeader";

function Board(props) {
  const dispatch = useDispatch();
  const board = useSelector(selectBoard);
  const [openLabel, setOpenLabel] = useState(false);
  const [openMembers, setOpenMembers] = useState(false);

  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down("lg"));

  const routeParams = useParams();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useDeepCompareEffect(() => {
    dispatch(getBoard(routeParams.boardId));
    dispatch(getCards(routeParams.boardId));
    dispatch(getLists(routeParams.boardId));
    dispatch(getLabels(routeParams.boardId));

    return () => {
      dispatch(resetBoard());
    };
  }, [dispatch, routeParams]);

  function onDragEnd(result) {
    const { source, destination } = result;

    // dropped nowhere
    if (!destination) {
      return;
    }

    // did not move anywhere - can bail early
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    // reordering list
    if (result.type === "list") {
      dispatch(reorderList(result));
    }

    // reordering card
    if (result.type === "card") {
      dispatch(reorderCard(result));
    }
  }

  if (!board) {
    return null;
  }

  return (
    <>
      <FusePageSimple
        header={<BoardHeader onSetSidebarOpen={setSidebarOpen} />}
        content={
          <>
            {board?.lists && (
              <div className="flex flex-1 overflow-x-auto overflow-y-hidden h-full">
                <LabelModal
                  openLabel={openLabel}
                  handleCloseLabel={(state) => setOpenLabel(state)}
                />{" "}
                <MembersModal
                  openMembers={openMembers}
                  handleCloseMembers={(state) => setOpenMembers(state)}
                />
                <DragDropContext onDragEnd={onDragEnd}>
                  <Droppable
                    droppableId="list"
                    type="list"
                    direction="horizontal"
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        className="flex py-16 md:py-24 px-8 md:px-12"
                      >
                        {board?.lists.map((list, index) => (
                          <BoardList
                            key={index}
                            listId={list.id.toString()}
                            cardIds={list.cards}
                            index={index}
                          />
                        ))}

                        {provided.placeholder}

                        <BoardAddList />
                      </div>
                    )}
                  </Droppable>
                </DragDropContext>
              </div>
            )}
          </>
        }
        rightSidebarOpen={sidebarOpen}
        rightSidebarContent={
          <BoardSettingsSidebar
            openLabel={openLabel}
            openMembers={openMembers}
            handleOpenLabel={(state) => setOpenLabel(state)}
            handleOpenMembers={(state) => setOpenMembers(state)}
            onSetSidebarOpen={setSidebarOpen}
          />
        }
        rightSidebarOnClose={() => setSidebarOpen(false)}
        scroll={isMobile ? "normal" : "content"}
        rightSidebarWidth={320}
      />
      <BoardCardDialog />
    </>
  );
}

export default withReducer("scrumboardApp", reducer)(withRouter(Board));
