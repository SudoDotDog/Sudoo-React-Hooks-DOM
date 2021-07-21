/**
 * @author WMXPY
 * @namespace ReactHooksDOM
 * @description Batch
 */

import * as ReactDOM from "react-dom";
import { BatchUpdateFunction } from "./declare";

export const batchUpdate = (updateFunction: BatchUpdateFunction): void => {

    ReactDOM.unstable_batchedUpdates(() => {
        updateFunction();
    });
};
