import React from "react";
import { useAppSelector } from "@shared/hooks/useRedux";

import ListEntry from "./ListEntry";

const AllList = () => {
    const { lists } = useAppSelector(state => state)
    return (
        <React.Fragment>
            {lists.map((list, i) => (
                <ListEntry list={list} key={i} />
            ))}
        </React.Fragment>
    );
}

export default AllList;