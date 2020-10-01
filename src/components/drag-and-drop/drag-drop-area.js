import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { DragDropContext, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import CardTarget from "./card-target";

const propTypes = {
  children: PropTypes.node,
};

function DragDropArea({ children }) {
  return (
    <DndProvider backend={HTML5Backend}>
      {children}
      {/* Some extra card targets to fix devious drop bug */}
      <CardTarget />
      <CardTarget />
    </DndProvider>
  );
}

DragDropArea.propTypes = propTypes;

export default DragDropArea;
