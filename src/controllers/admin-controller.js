import { ROLE } from "../../test/fixtures.js";
import { db } from "../models/db.js";

export const adminController = {
  index: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      console.log(loggedInUser);
      const users = await db.userStore.getAllUsers();
      const viewData = {
        title: "CraftSpot Admin Dashboard",
        users: users,
      };
        return h.view("admin-dashboard-view", viewData);
  },
},

  deleteUser: {
    handler: async function (request, h) {
      const user = await db.userStore.getUserById(request.params.id);
      await db.userStore.deleteUserById(user._id);
      return h.redirect("/admin-dashboard");
    }
  }
};