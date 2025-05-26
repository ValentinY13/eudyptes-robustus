<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<style>

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html, body {
    background-color: #edeced;

    margin: 0;
    padding: 0;
    height: 100%;

    font-family: Inter, sans-serif;
  }

  .page-enter-active,
  .page-leave-active {
    transition: all 0.25s;
  }

  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    filter: blur(.5rem);
  }

  .btn {
    background-color: #fffeb4;
    text-decoration: none;
    color: black;

    display: flex;
    align-items: center;
    width: fit-content;
    gap: 12px;

    padding: 12px 16px;
    border-radius: 25px;
  }

  .btn:hover {
    background-color: #fdfb6a;
  }

  .arrow {
    mask: url("/arrow.svg");
    mask-position: center;
    mask-repeat: no-repeat;
    mask-size: contain;
    width: 1em;
    height: 1em;

    background-color: black;
  }

  .btn .arrow {
    display: inline-block;
    transition: transform 0.4s ease;
  }

  .btn:hover .arrow {
    transform: translateX(4px);
  }
</style>