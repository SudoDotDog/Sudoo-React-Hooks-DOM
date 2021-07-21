/**
 * @author WMXPY
 * @namespace ReactHooksDOM
 * @description Batch
 */

import * as ReactDOM from "react-dom";

export const batchUpdate = () => {

    ReactDOM.unstable_batchedUpdates(() => {

    });
};
