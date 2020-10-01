import React from "react";
import { ContentHeader } from "components";
import { pluralize } from "utils";

function header() {
  return (
    <ContentHeader title="Title" subtitle="Subtitle">
      <div className="header-status">
        {6 > 0 && (
          <div className="status-container">
            <span className="dot warn"></span>
            <p className="unpublished">{`${6} Unassigned ${pluralize(
              "Presentation",
              6
            )}`}</p>
          </div>
        )}
      </div>
    </ContentHeader>
  );
}

export default header;
