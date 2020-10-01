import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
};

function ContentHeader({ children, subtitle, title }) {
  return (
    <header className="header-content">
      <div className="header-block-container">
        <div className="label-content">
          <h1>{title}</h1>
          <div className="subtitle">{subtitle}</div>
        </div>

        {children}
      </div>
    </header>
  );
}

ContentHeader.propTypes = propTypes;

export default ContentHeader;
