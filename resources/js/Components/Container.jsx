import React from "react";

export default function Container({ children }) {
    return (
        <div>
            <div className=" w-11/12 mx-auto">{children}</div>
        </div>
    );
}
