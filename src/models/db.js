import { userMemStore } from "./mem/user-mem-store.js";
import { craftMemStore } from "./mem/craft-mem-store.js";
import { spotMemStore } from "./mem/spot-mem-store.js";

import { userJsonStore } from "./json/user-json-store.js";
import { craftJsonStore } from "./json/craft-json-store.js";
import { spotJsonStore } from "./json/spot-json-store.js";

import { connectMongo } from "./mongo/connect.js";
import { userMongoStore } from "./mongo/user-mongo-store.js";
import { craftMongoStore } from "./mongo/craft-mongo-store.js";
import { spotMongoStore } from "./mongo/spot-mongo-store.js";

export const db = {
  userStore: null,
  craftStore: null,
  spotStore: null,

  init(storeType) {
    switch (storeType) {
      case "json":
        this.userStore = userJsonStore;
        this.craftStore = craftJsonStore;
        this.spotStore = spotJsonStore;
        break;
      case "mongo":
        this.userStore = userMongoStore;
        this.craftStore = craftMongoStore;
        this.spotStore = spotMongoStore;
        connectMongo();
        break;
      default:
        this.userStore = userMemStore;
        this.craftStore = craftMemStore;
        this.spotStore = spotMemStore;
    }
  },
};