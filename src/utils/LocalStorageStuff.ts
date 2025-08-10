"use client";

export function getFromLocalStorage(itemName: string): string | null {
  if (typeof window !== "undefined" && window.localStorage) {
    return localStorage.getItem(itemName);
  }
  return null;
}

export function saveToLocalStorage(itemName: string, data: string) {
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.setItem(itemName, data);
  }
}

export function removeFromLocalStorage(itemName: string) {
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.removeItem(itemName);
  }
}

export function clearLocalStorage() {
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.clear();
  }
}
