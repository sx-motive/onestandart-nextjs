import React from "react";
import Link from "next/link";

function Button(props) {
  return (
    <Link href={props.link}>
      <a
        data-magnetic={props.magnetic ? true : null}
        data-cursor={props.cursor}
        className={`btn ` + `${props.class}`}
      >
        <span data-text={props.title}>{props.title}</span>

        {props.rippleLess ? (
          ""
        ) : (
          <div className="ripple">
            <div className="ripple-span"></div>
          </div>
        )}
      </a>
    </Link>
  );
}

export default Button;
