import React from "react";

export const loadState = () => {
  try {
    let localData = localStorage.getItem("todos");
    if (localData != null) {
      return JSON.parse(localData);
    } else {
      return [];
    }
  } catch (e) {}
};

export const saveState = (state) => {
  try {
    localStorage.setItem("todos", JSON.stringify(state));
  } catch (e) {
    return undefined;
  }
};
