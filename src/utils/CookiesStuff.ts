"use client";

export function getCookie(name: string): string[] | [] {
  let cookies: string[] = [];
  if (typeof document !== "undefined") {
    const docCookies = document.cookie;
    const allCookies = docCookies.split(" ");
    allCookies.forEach((cookie) => {
      if (cookie.match(name)) {
        console.log("ola");
        cookies = cookie.replace(";", "").split("=");
        return;
      }
    });
  }
  return cookies;
}

export function removeCookie(name: string) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}
