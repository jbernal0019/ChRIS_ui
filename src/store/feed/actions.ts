import { action } from "typesafe-actions";
import { FeedActionTypes, AddNodePayload, PluginInstanceObj } from "./types";

import { Feed, PluginInstance } from "@fnndsc/chrisapi";

// type them properly as well -> For more info: https://github.com/piotrwitek/typesafe-actions
export const getAllFeedsRequest = (
  name?: string,
  limit?: number,
  offset?: number
) => action(FeedActionTypes.GET_ALL_FEEDS_REQUEST, { name, limit, offset });

export const getAllFeedsSuccess = (feeds: Feed[]) =>
  action(FeedActionTypes.GET_ALL_FEEDS_SUCCESS, feeds);

export const getAllFeedsError = (error: any) =>
  action(FeedActionTypes.GET_ALL_FEEDS_ERROR, error);
export const getFeedRequest = (id: string) =>
  action(FeedActionTypes.GET_FEED_REQUEST, id);
export const getFeedSuccess = (item: Feed) =>
  action(FeedActionTypes.GET_FEED_SUCCESS, item);
export const getFeedError = (error: any) =>
  action(FeedActionTypes.GET_FEED_ERROR, error);

export const getSelectedPlugin = (item: PluginInstance) =>
  action(FeedActionTypes.GET_SELECTED_PLUGIN, item);
export const getPluginInstancesRequest = (feed: Feed) =>
  action(FeedActionTypes.GET_PLUGIN_INSTANCES_REQUEST, feed);
export const getPluginInstancesSuccess = (items: PluginInstanceObj) =>
  action(FeedActionTypes.GET_PLUGIN_INSTANCES_SUCCESS, items);
export const getPluginInstancesError = (error: any) =>
  action(FeedActionTypes.GET_PLUGIN_INSTANCES_ERROR, error);

export const getPluginInstanceResources = (pluginInstances: PluginInstance[]) =>
  action(FeedActionTypes.GET_PLUGIN_INSTANCE_RESOURCE_REQUEST, pluginInstances);
export const getPluginInstanceResourceSuccess = (resource: any) =>
  action(FeedActionTypes.GET_PLUGIN_INSTANCE_RESOURCE_SUCCESS, resource);

export const getPluginFilesRequest = (selected: PluginInstance) =>
  action(FeedActionTypes.GET_PLUGIN_FILES_REQUEST, selected);
export const getPluginFilesSuccess = (filesPayload: {
  id: number;
  files: any[];
}) => action(FeedActionTypes.GET_PLUGIN_FILES_SUCCESS, filesPayload);
export const getPluginFilesError = (payload: { id: number; error: any }) =>
  action(FeedActionTypes.GET_PLUGIN_FILES_ERROR, payload);

export const addFeed = (feed: Feed) => action(FeedActionTypes.ADD_FEED, feed);
export const addNodeRequest = (item: AddNodePayload) =>
  action(FeedActionTypes.ADD_NODE_REQUEST, item);
export const addNodeSuccess = (pluginItem: PluginInstance) =>
  action(FeedActionTypes.ADD_NODE_SUCCESS, pluginItem);

export const deleteNode = (feed: Feed) => {
  return action(FeedActionTypes.DELETE_NODE, feed);
};

export const deleteNodeSuccess = () =>
  action(FeedActionTypes.DELETE_NODE_SUCCESS);

export const stopFetchingPluginResources = (id: number) =>
  action(FeedActionTypes.STOP_FETCHING_PLUGIN_RESOURCES, id);

export const destroyFeedState = () => action(FeedActionTypes.RESET_FEED_STATE);