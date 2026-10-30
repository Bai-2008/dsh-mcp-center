window.__ModuleLoader__.load({
  id: "dsh-mcp-center",
  factory(require) {
    const React = require("react");
    const { useEffect, useMemo, useRef, useState } = React;
    const h = React.createElement;
    const NS = "dsh-mcp-center";
    const DATA = __PLUGIN_DATA__;
    const DICTS = __PLUGIN_DICTIONARIES__;
    const ALL = "__all__";

    const CSS = `
      .mc-root {
        --mc-radius: 10px;
        box-sizing: border-box;
        max-width: 1120px;
        margin: 0 auto;
        padding: 20px 24px 48px;
        color: var(--dsw-alias-label-primary);
        font-size: 14px;
        line-height: 1.6;
        text-align: left;
      }
      .mc-root *, .mc-root *::before, .mc-root *::after { box-sizing: border-box; }
      .mc-root button, .mc-root input { font: inherit; }
      .mc-root button { color: inherit; }
      .mc-root a { color: var(--dsw-alias-link); text-decoration: none; }
      .mc-root a:hover { text-decoration: underline; }
      .mc-head {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 20px;
        margin-bottom: 18px;
      }
      .mc-eyebrow {
        margin: 0 0 4px;
        color: var(--dsw-alias-label-tertiary);
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
        font-size: 10px;
        letter-spacing: .1em;
        text-transform: uppercase;
      }
      .mc-title {
        margin: 0;
        font-size: 24px;
        line-height: 1.2;
        letter-spacing: -.03em;
      }
      .mc-sub {
        max-width: 680px;
        margin: 6px 0 0;
        color: var(--dsw-alias-label-secondary);
        font-size: 12.5px;
      }
      .mc-head-side {
        display: flex;
        align-items: center;
        gap: 12px;
        flex-wrap: wrap;
        justify-content: flex-end;
        padding-top: 4px;
      }
      .mc-count {
        color: var(--dsw-alias-label-tertiary);
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
        font-size: 10px;
        white-space: nowrap;
      }
      .mc-open-site {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        min-height: 30px;
        padding: 0 9px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 7px;
        background: var(--dsw-alias-bg-layer-1);
        color: var(--dsw-alias-label-secondary);
        font-size: 11px;
      }
      .mc-open-site:hover { color: var(--dsw-alias-label-primary); text-decoration: none; }
      .mc-toolbar {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        flex-wrap: wrap;
        margin-bottom: 14px;
      }
      .mc-search {
        position: relative;
        flex: 1 1 280px;
        min-width: 0;
      }
      .mc-search svg {
        position: absolute;
        left: 10px;
        top: 50%;
        width: 15px;
        height: 15px;
        transform: translateY(-50%);
        fill: none;
        stroke: var(--dsw-alias-label-tertiary);
        stroke-linecap: round;
        stroke-width: 1.6;
        pointer-events: none;
      }
      .mc-search input {
        width: 100%;
        height: 36px;
        padding: 0 10px 0 33px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 8px;
        outline: 0;
        background: var(--dsw-alias-bg-layer-1);
        color: var(--dsw-alias-label-primary);
        font-size: 12.5px;
      }
      .mc-search input:focus { border-color: var(--dsw-alias-brand-primary); box-shadow: 0 0 0 3px color-mix(in srgb, var(--dsw-alias-brand-primary) 14%, transparent); }
      .mc-search input::placeholder { color: var(--dsw-alias-label-tertiary); }
      .mc-cats { display: flex; flex-wrap: wrap; gap: 4px; }
      .mc-cat {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        min-height: 28px;
        padding: 0 8px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 6px;
        background: transparent;
        color: var(--dsw-alias-label-secondary);
        font-size: 11px;
        cursor: pointer;
      }
      .mc-cat:hover { border-color: var(--dsw-alias-border-l2); color: var(--dsw-alias-label-primary); }
      .mc-cat.active {
        border-color: color-mix(in srgb, var(--dsw-alias-brand-primary) 42%, transparent);
        background: color-mix(in srgb, var(--dsw-alias-brand-primary) 10%, transparent);
        color: var(--dsw-alias-brand-primary);
      }
      .mc-cat-count { color: var(--dsw-alias-label-tertiary); font-family: ui-monospace, monospace; font-size: 9px; }
      .mc-body {
        display: grid;
        grid-template-columns: minmax(260px, 340px) minmax(0, 1fr);
        gap: 14px;
        align-items: start;
      }
      .mc-list {
        display: grid;
        gap: 7px;
        max-height: 660px;
        overflow: auto;
        padding-right: 3px;
        scrollbar-width: thin;
      }
      .mc-card {
        display: block;
        width: 100%;
        padding: 12px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: var(--mc-radius);
        background: var(--dsw-alias-bg-layer-1);
        color: var(--dsw-alias-label-primary);
        text-align: left;
        cursor: pointer;
      }
      .mc-card:hover { border-color: var(--dsw-alias-border-l2); background: var(--dsw-alias-interactive-bg-hover); }
      .mc-card.active { border-color: color-mix(in srgb, var(--dsw-alias-brand-primary) 55%, transparent); background: var(--dsw-alias-interactive-bg-hover); }
      .mc-card-head { display: flex; align-items: flex-start; gap: 9px; }
      .mc-icon {
        flex: none;
        width: 34px;
        height: 34px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 8px;
        object-fit: contain;
        background: var(--dsw-alias-bg-base);
      }
      .mc-icon-fallback {
        display: inline-grid;
        place-items: center;
        color: #fff;
        font-weight: 700;
        font-size: 14px;
      }
      .mc-card-copy { min-width: 0; flex: 1; }
      .mc-card-title {
        display: block;
        overflow: hidden;
        font-size: 13px;
        font-weight: 650;
        line-height: 1.35;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .mc-card-desc {
        display: -webkit-box;
        overflow: hidden;
        margin: 2px 0 0;
        color: var(--dsw-alias-label-secondary);
        font-size: 11px;
        line-height: 1.5;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      .mc-card-meta {
        display: flex;
        align-items: center;
        gap: 5px;
        overflow: hidden;
        margin-top: 7px;
        color: var(--dsw-alias-label-tertiary);
        font-family: ui-monospace, monospace;
        font-size: 9px;
        white-space: nowrap;
      }
      .mc-card-meta span { overflow: hidden; text-overflow: ellipsis; }
      .mc-badges { display: flex; flex-wrap: wrap; align-items: center; gap: 3px; }
      .mc-badge {
        display: inline-flex;
        align-items: center;
        min-height: 18px;
        padding: 0 5px;
        border: 1px solid transparent;
        border-radius: 5px;
        font-size: 9.5px;
        font-weight: 600;
        line-height: 1.3;
        white-space: nowrap;
      }
      .mc-badge-official {
        border-color: color-mix(in srgb, var(--dsw-static-amber-400) 35%, transparent);
        background: color-mix(in srgb, var(--dsw-static-amber-400) 12%, transparent);
        color: var(--dsw-static-amber-500);
      }
      .mc-badge-verified {
        border-color: color-mix(in srgb, var(--dsw-alias-brand-primary) 35%, transparent);
        background: color-mix(in srgb, var(--dsw-alias-brand-primary) 10%, transparent);
        color: var(--dsw-alias-brand-primary);
      }
      .mc-badge-transport { border-color: var(--dsw-alias-border-l1); color: var(--dsw-alias-label-tertiary); font-family: ui-monospace, monospace; font-weight: 500; }
      .mc-badge-broken { border-color: color-mix(in srgb, var(--dsw-alias-state-error-primary) 40%, transparent); background: color-mix(in srgb, var(--dsw-alias-state-error-primary) 10%, transparent); color: var(--dsw-alias-state-error-primary); }
      .mc-detail {
        min-width: 0;
        padding: 18px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: var(--mc-radius);
        background: var(--dsw-alias-bg-layer-1);
      }
      .mc-detail-head { display: flex; align-items: flex-start; gap: 12px; }
      .mc-detail-head .mc-icon { width: 46px; height: 46px; border-radius: 10px; font-size: 19px; }
      .mc-detail-title-row { display: flex; align-items: center; flex-wrap: wrap; gap: 6px; }
      .mc-detail-title { margin: 0; font-size: 20px; line-height: 1.25; letter-spacing: -.02em; }
      .mc-detail-desc { max-width: 720px; margin: 7px 0 0; color: var(--dsw-alias-label-secondary); font-size: 12.5px; line-height: 1.65; }
      .mc-links { display: flex; flex-wrap: wrap; gap: 10px; margin: 9px 0 0; font-size: 11px; }
      .mc-broken {
        margin: 0 0 12px;
        padding: 9px 10px;
        border: 1px solid color-mix(in srgb, var(--dsw-alias-state-error-primary) 40%, transparent);
        border-radius: 7px;
        background: color-mix(in srgb, var(--dsw-alias-state-error-primary) 8%, transparent);
        color: var(--dsw-alias-state-error-primary);
        font-size: 11px;
      }
      .mc-section { margin-top: 18px; }
      .mc-section-head { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; margin-bottom: 7px; }
      .mc-section-title { margin: 0; font-size: 12px; font-weight: 650; }
      .mc-section-note { color: var(--dsw-alias-label-tertiary); font-size: 10px; }
      .mc-tabs { display: flex; flex-wrap: wrap; gap: 4px; margin-bottom: 8px; }
      .mc-tab {
        min-height: 28px;
        padding: 0 8px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 6px;
        background: transparent;
        color: var(--dsw-alias-label-secondary);
        font-size: 10.5px;
        cursor: pointer;
      }
      .mc-tab:hover { color: var(--dsw-alias-label-primary); }
      .mc-tab.active {
        border-color: color-mix(in srgb, var(--dsw-alias-brand-primary) 42%, transparent);
        background: color-mix(in srgb, var(--dsw-alias-brand-primary) 10%, transparent);
        color: var(--dsw-alias-brand-primary);
      }
      .mc-code-shell { overflow: hidden; border: 1px solid var(--dsw-alias-border-l1); border-radius: 7px; background: var(--dsw-alias-markdown-code-block); }
      .mc-code-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 30px;
        padding: 0 9px;
        border-bottom: 1px solid color-mix(in srgb, var(--dsw-alias-border-l1) 70%, transparent);
        color: var(--dsw-alias-label-tertiary);
        font-family: ui-monospace, monospace;
        font-size: 9px;
      }
      .mc-copy {
        min-height: 22px;
        padding: 0 6px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 5px;
        background: transparent;
        color: var(--dsw-alias-label-secondary);
        font-family: ui-monospace, monospace;
        font-size: 9px;
        cursor: pointer;
      }
      .mc-copy:hover, .mc-copy.copied { border-color: var(--dsw-alias-brand-primary); color: var(--dsw-alias-brand-primary); }
      .mc-code {
        max-height: 330px;
        margin: 0;
        padding: 11px 12px 13px;
        overflow: auto;
        color: var(--dsw-alias-label-primary);
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
        font-size: 10.5px;
        line-height: 1.7;
        tab-size: 2;
      }
      .mc-code code { white-space: pre; }
      .mc-ph {
        padding: 0 2px;
        border-radius: 3px;
        background: color-mix(in srgb, var(--dsw-alias-brand-primary) 18%, transparent);
        color: var(--dsw-alias-brand-primary);
      }
      .mc-hint { margin: 6px 0 0; color: var(--dsw-alias-label-tertiary); font-size: 10px; }
      .mc-callout {
        margin-top: 9px;
        padding: 10px;
        border: 1px solid color-mix(in srgb, var(--dsw-static-amber-400) 34%, transparent);
        border-radius: 7px;
        background: color-mix(in srgb, var(--dsw-static-amber-400) 8%, transparent);
        color: var(--dsw-alias-label-secondary);
      }
      .mc-callout-title { display: flex; align-items: center; gap: 5px; color: var(--dsw-static-amber-500); font-size: 10.5px; font-weight: 650; }
      .mc-required { display: grid; gap: 4px; margin: 6px 0 0; padding: 0; list-style: none; }
      .mc-required li { display: flex; justify-content: space-between; align-items: baseline; gap: 10px; font-size: 10.5px; }
      .mc-required code { color: var(--dsw-alias-label-primary); font-size: 10px; }
      .mc-required a { flex: none; font-size: 10px; }
      .mc-required-empty { margin: 5px 0 0; font-size: 10.5px; }
      .mc-info {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 9px 14px;
        margin: 0;
      }
      .mc-info dt { color: var(--dsw-alias-label-tertiary); font-family: ui-monospace, monospace; font-size: 9px; }
      .mc-info dd { margin: 1px 0 0; font-size: 11px; overflow-wrap: anywhere; }
      .mc-tools { border-top: 1px solid var(--dsw-alias-border-l1); padding-top: 10px; }
      .mc-tools summary { cursor: pointer; color: var(--dsw-alias-label-secondary); font-size: 11px; font-weight: 600; }
      .mc-tool-list { display: grid; gap: 7px; margin: 8px 0 0; padding: 0; list-style: none; }
      .mc-tool-list li { padding-top: 7px; border-top: 1px solid var(--dsw-alias-border-l1); }
      .mc-tool-name { display: flex; align-items: center; gap: 5px; color: var(--dsw-alias-label-primary); font-family: ui-monospace, monospace; font-size: 10px; }
      .mc-tool-warn { color: var(--dsw-static-amber-500); cursor: help; }
      .mc-tool-desc { margin: 2px 0 0; color: var(--dsw-alias-label-secondary); font-size: 10.5px; }
      .mc-empty { padding: 32px 16px; color: var(--dsw-alias-label-tertiary); text-align: center; }
      .mc-empty strong { display: block; color: var(--dsw-alias-label-primary); font-size: 14px; }
      .mc-empty p { margin: 4px 0 0; font-size: 11.5px; }
      .mc-foot { margin-top: 12px; color: var(--dsw-alias-label-tertiary); font-size: 9.5px; }
      .mc-foot code { font-family: ui-monospace, monospace; }
      .mc-view-tabs {
        display: flex;
        align-items: center;
        gap: 3px;
        margin: 0 0 14px;
        padding-bottom: 7px;
        border-bottom: 1px solid var(--dsw-alias-border-l1);
      }
      .mc-view-tab {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        min-height: 30px;
        padding: 0 9px;
        border: 1px solid transparent;
        border-radius: 6px;
        background: transparent;
        color: var(--dsw-alias-label-secondary);
        font-size: 11.5px;
        cursor: pointer;
      }
      .mc-view-tab:hover { color: var(--dsw-alias-label-primary); background: var(--dsw-alias-interactive-bg-hover); }
      .mc-view-tab.active {
        border-color: color-mix(in srgb, var(--dsw-alias-brand-primary) 28%, transparent);
        background: color-mix(in srgb, var(--dsw-alias-brand-primary) 9%, transparent);
        color: var(--dsw-alias-brand-primary);
      }
      .mc-view-count {
        display: inline-grid;
        place-items: center;
        min-width: 17px;
        height: 16px;
        padding: 0 4px;
        border-radius: 4px;
        background: color-mix(in srgb, var(--dsw-alias-label-tertiary) 14%, transparent);
        color: var(--dsw-alias-label-tertiary);
        font-family: ui-monospace, monospace;
        font-size: 8.5px;
      }
      .mc-toolbar-actions { display: flex; align-items: center; gap: 5px; margin-left: auto; }
      .mc-primary {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        min-height: 30px;
        padding: 0 10px;
        border: 1px solid var(--dsw-alias-brand-primary);
        border-radius: 7px;
        background: var(--dsw-alias-brand-primary);
        color: #fff;
        color: var(--dsw-static-neutral-00);
        font-size: 11px;
        font-weight: 650;
        cursor: pointer;
      }
      .mc-primary:hover { filter: brightness(1.06); }
      .mc-primary:disabled { opacity: .55; cursor: wait; }
      .mc-secondary {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        min-height: 27px;
        padding: 0 8px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 6px;
        background: transparent;
        color: var(--dsw-alias-label-secondary);
        font-size: 10px;
        cursor: pointer;
      }
      .mc-secondary:hover { border-color: var(--dsw-alias-border-l2); color: var(--dsw-alias-label-primary); }
      .mc-secondary:disabled { opacity: .45; cursor: default; }
      .mc-secondary.danger { color: var(--dsw-alias-state-error-primary); }
      .mc-secondary.danger:hover { border-color: color-mix(in srgb, var(--dsw-alias-state-error-primary) 40%, transparent); }
      .mc-installed-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        flex-wrap: wrap;
        margin-bottom: 10px;
      }
      .mc-installed-title { margin: 0; font-size: 15px; letter-spacing: -.01em; }
      .mc-installed-sub { margin: 2px 0 0; color: var(--dsw-alias-label-tertiary); font-size: 10.5px; }
      .mc-installed-list { display: grid; gap: 7px; }
      .mc-installed-row {
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
        padding: 10px 12px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 8px;
        background: var(--dsw-alias-bg-layer-1);
      }
      .mc-installed-copy { min-width: 170px; flex: 1; }
      .mc-installed-name { display: flex; align-items: center; gap: 6px; font-size: 12.5px; font-weight: 650; }
      .mc-installed-key {
        overflow: hidden;
        margin-top: 1px;
        color: var(--dsw-alias-label-tertiary);
        font-family: ui-monospace, monospace;
        font-size: 9px;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .mc-installed-badges { display: flex; align-items: center; gap: 4px; flex-wrap: wrap; }
      .mc-row-actions { display: flex; align-items: center; gap: 3px; flex-wrap: wrap; }
      .mc-loading { padding: 28px 16px; color: var(--dsw-alias-label-tertiary); font-size: 11.5px; text-align: center; }
      .mc-toast {
        position: fixed;
        right: 20px;
        bottom: 20px;
        z-index: 120;
        max-width: min(420px, calc(100vw - 40px));
        padding: 9px 12px;
        border: 1px solid var(--dsw-alias-border-l2);
        border-radius: 8px;
        background: var(--dsw-alias-bg-overlay);
        box-shadow: 0 10px 32px color-mix(in srgb, #000 25%, transparent);
        color: var(--dsw-alias-label-primary);
        font-size: 11px;
      }
      .mc-toast.bad { border-color: color-mix(in srgb, var(--dsw-alias-state-error-primary) 45%, transparent); color: var(--dsw-alias-state-error-primary); }
      .mc-modal-mask {
        position: fixed;
        inset: 0;
        z-index: 110;
        display: grid;
        place-items: center;
        padding: 20px;
        background: color-mix(in srgb, var(--dsw-alias-bg-mask-2) 75%, transparent);
      }
      .mc-modal {
        width: min(640px, 100%);
        max-height: min(720px, 86vh);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        border: 1px solid var(--dsw-alias-border-l2);
        border-radius: 10px;
        background: var(--dsw-alias-bg-overlay);
        box-shadow: 0 24px 64px color-mix(in srgb, #000 30%, transparent);
      }
      .mc-modal-head { padding: 14px 16px 8px; }
      .mc-modal-title { margin: 0; font-size: 16px; letter-spacing: -.01em; }
      .mc-modal-note { margin: 4px 0 0; color: var(--dsw-alias-label-secondary); font-size: 11px; line-height: 1.55; }
      .mc-modal-body { padding: 4px 16px 10px; overflow: auto; }
      .mc-textarea {
        width: 100%;
        min-height: 260px;
        padding: 10px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 7px;
        outline: 0;
        background: var(--dsw-alias-bg-base);
        color: var(--dsw-alias-label-primary);
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
        font-size: 10.5px;
        line-height: 1.65;
        resize: vertical;
      }
      .mc-textarea:focus { border-color: var(--dsw-alias-brand-primary); }
      .mc-modal-required { margin: 8px 0 0; padding: 0; list-style: none; display: grid; gap: 3px; }
      .mc-modal-required li { color: var(--dsw-alias-label-secondary); font-size: 10px; }
      .mc-modal-required code { color: var(--dsw-alias-label-primary); }
      .mc-modal-actions {
        display: flex;
        justify-content: flex-end;
        gap: 6px;
        padding: 10px 16px 14px;
        border-top: 1px solid var(--dsw-alias-border-l1);
      }
      @media (max-width: 820px) {
        .mc-root { padding: 16px 14px 36px; }
        .mc-head { flex-direction: column; gap: 8px; }
        .mc-head-side { justify-content: flex-start; }
        .mc-body { grid-template-columns: 1fr; }
        .mc-list { max-height: none; grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .mc-info { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      }
      @media (max-width: 700px) {
        .mc-installed-row { align-items: flex-start; }
        .mc-row-actions { width: 100%; padding-top: 2px; }
        .mc-modal { max-height: 92vh; }
        .mc-textarea { min-height: 220px; }
      }
      @media (max-width: 560px) {
        .mc-list { grid-template-columns: 1fr; }
        .mc-info { grid-template-columns: 1fr 1fr; }
        .mc-detail { padding: 14px; }
        .mc-view-tabs { overflow-x: auto; }
        .mc-view-tab { flex: none; }
      }
    `;

    function transportLabel(t, type) {
      if (type === "sse") return t("transportSse");
      if (type === "streamable_http") return t("transportRemote");
      return t("transportStdio");
    }

    function connectionStateLabel(t, item) {
      if (item.enabled === false) return t("disabled");
      const state = item.connectionState;
      if (state === "connected" || state === "ready") return t("connected");
      if (state === "recovering") return t("recovering");
      if (state === "needs-auth" || state === "reauthorize") return t("reauthorize");
      if (state === "error" || state === "connection-error") return t("connectionError");
      if (state === "unknown" || state === undefined || state === null) return t("stateUnknown");
      return t("notConnected");
    }

    function initials(name) {
      return Array.from(name || "?").slice(0, 1).join("").toUpperCase();
    }

    function fallbackColor(name) {
      let hash = 0;
      for (const char of name || "?") hash = (hash * 31 + char.codePointAt(0)) >>> 0;
      const hue = 190 + (hash % 130);
      const saturation = 22 + (hash % 10);
      const lightness = 28 + (hash % 9);
      return `hsl(${hue} ${saturation}% ${lightness}%)`;
    }

    function EntryIcon({ entry, large }) {
      const size = large ? 46 : 34;
      if (entry.iconData) {
        return h("img", {
          className: "mc-icon",
          src: entry.iconData,
          alt: "",
          width: size,
          height: size,
          loading: "lazy",
          decoding: "async",
        });
      }
      return h(
        "span",
        {
          className: "mc-icon mc-icon-fallback",
          style: { background: fallbackColor(entry.name) },
          "aria-hidden": true,
        },
        initials(entry.display_name),
      );
    }

    function Badge({ tone, children }) {
      return h("span", { className: `mc-badge mc-badge-${tone}` }, children);
    }

    function Code({ code }) {
      const parts = code.split(/(<YOUR_[A-Z0-9_]+>)/g);
      return h(
        "pre",
        { className: "mc-code" },
        h(
          "code",
          null,
          parts.map((part, index) =>
            /^<YOUR_[A-Z0-9_]+>$/.test(part)
              ? h("span", { className: "mc-ph", key: index }, part)
              : part,
          ),
        ),
      );
    }

    async function writeClipboard(text) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        return;
      }
      const area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      const command = document.execCommand;
      command.call(document, "copy");
      area.remove();
    }

    function useCopyState() {
      const [copied, setCopied] = useState("");
      const timer = useRef(null);
      useEffect(() => () => clearTimeout(timer.current), []);
      const copy = async (text, key, t) => {
        try {
          await writeClipboard(text);
          setCopied(key);
          clearTimeout(timer.current);
          timer.current = setTimeout(() => setCopied(""), 1500);
        } catch {
          setCopied(`${key}:failed`);
          clearTimeout(timer.current);
          timer.current = setTimeout(() => setCopied(""), 1500);
        }
      };
      return [copied, copy];
    }

    const CONNECTOR_API = "/mcp-connector/api";

    async function callConnector(method, params = {}, timeoutMs = 30_000) {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), timeoutMs);
      try {
        const response = await fetch(CONNECTOR_API, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ method, params }),
          signal: controller.signal,
        });
        const data = await response.json();
        if (!response.ok && data?.ok !== false) {
          return { ok: false, message: `HTTP ${response.status}` };
        }
        return data;
      } catch (error) {
        return {
          ok: false,
          message: controller.signal.aborted
            ? "请求超时"
            : `MCP 连接器不可用：${error?.message || error}`,
        };
      } finally {
        clearTimeout(timer);
      }
    }

    function useToast() {
      const [toast, setToast] = useState(null);
      const timer = useRef(null);
      useEffect(() => () => clearTimeout(timer.current), []);
      const notify = (message, bad = false) => {
        setToast({ message, bad });
        clearTimeout(timer.current);
        timer.current = setTimeout(() => setToast(null), 4200);
      };
      return [toast, notify];
    }

    function MarketView({ t, openConnector }) {
      const [view, setView] = useState("catalog");
      const [query, setQuery] = useState("");
      const [category, setCategory] = useState(ALL);
      const [selectedName, setSelectedName] = useState(DATA.entries[0]?.name ?? "");
      const [installId, setInstallId] = useState("");
      const [copied, copy] = useCopyState();
      const [toast, notify] = useToast();
      const [connector, setConnector] = useState({
        available: null,
        loading: true,
        items: [],
        message: "",
      });
      const [modal, setModal] = useState(null);
      const [modalBusy, setModalBusy] = useState(false);
      const [updating, setUpdating] = useState(false);

      const categories = useMemo(
        () => [
          { name: t("all"), value: ALL, count: DATA.entries.length },
          ...DATA.categories.map((item) => ({
            name: item.name,
            value: item.name,
            count: item.count,
          })),
        ],
        [t],
      );

      const filtered = useMemo(() => {
        const needle = query.trim().toLowerCase();
        return DATA.entries.filter((entry) => {
          if (category !== ALL && !entry.categories.includes(category)) {
            return false;
          }
          if (!needle) {
            return true;
          }
          return [
            entry.display_name,
            entry.name,
            entry.description,
            entry.vendor,
            ...entry.categories,
            ...entry.tools.map((tool) => `${tool.name} ${tool.description}`),
          ]
            .join(" ")
            .toLowerCase()
            .includes(needle);
        });
      }, [category, query]);

      const selected =
        filtered.find((entry) => entry.name === selectedName) ??
        filtered[0] ??
        null;

      useEffect(() => {
        if (selected) setSelectedName(selected.name);
      }, [selected?.name]);

      const install =
        selected?.install.find((item) => item.id === installId) ??
        selected?.install[0] ??
        null;
      const required =
        selected?.credentials.filter((credential) => credential.required) ?? [];
      const siteUrl = `${DATA.site.origin}${DATA.site.base}`;

      async function refreshConnections() {
        setConnector((current) => ({ ...current, loading: true }));
        const result = await callConnector("status", {}, 20_000);
        if (result.ok) {
          setConnector({
            available: true,
            loading: false,
            items: Array.isArray(result.detail?.items) ? result.detail.items : [],
            message: "",
          });
        } else {
          setConnector({
            available: false,
            loading: false,
            items: [],
            message: result.message || t("connectorUnavailable"),
          });
        }
      }

      useEffect(() => {
        void refreshConnections();
      }, []);

      useEffect(() => {
        if (!modal) return undefined;
        const onKeyDown = (event) => {
          if (event.key === "Escape" && !modalBusy) setModal(null);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
      }, [modal, modalBusy]);

      function requireConnector() {
        if (connector.available === true) return true;
        notify(t("backendMissing"), true);
        return false;
      }

      function openInstall(entry) {
        if (connector.available === null) {
          notify(t("loading"), true);
          return;
        }
        if (!requireConnector()) return;
        const config = entry.install.find((item) => item.id === "dsh") ?? entry.install[0];
        if (!config) {
          notify(t("noInstall"), true);
          return;
        }
        setModal({
          kind: "install",
          title: `${t("installToConnector")} · ${entry.display_name}`,
          json: config.code,
          entry,
        });
      }

      async function openEdit(item) {
        if (!requireConnector()) return;
        const result = await callConnector("editableConnectionConfig", { key: item.key }, 20_000);
        if (!result.ok) {
          notify(result.message || t("editLoadFailed"), true);
          return;
        }
        setModal({
          kind: "edit",
          title: `${t("editTitle")} · ${item.name || item.key}`,
          json: result.detail?.json || "",
          key: item.key,
        });
      }

      async function submitModal() {
        if (!modal) return;
        if (modal.kind === "install" && /<YOUR_[A-Z0-9_]+>/.test(modal.json)) {
          notify(t("placeholderRemaining"), true);
          return;
        }
        let parsed;
        try {
          parsed = JSON.parse(modal.json);
        } catch {
          notify(`${t("installJsonInvalid")}`, true);
          return;
        }
        setModalBusy(true);
        try {
          const result =
            modal.kind === "install"
              ? await callConnector("importJson", { json: JSON.stringify(parsed, null, 2) }, 145_000)
              : await callConnector(
                  "reconfigureConnection",
                  { key: modal.key, json: JSON.stringify(parsed, null, 2) },
                  145_000,
                );
          if (!result.ok) {
            notify(result.message || t("actionFailed"), true);
            return;
          }
          setModal(null);
          setView("installed");
          notify(modal.kind === "install" ? t("installSuccess") : t("editSuccess"));
          await refreshConnections();
        } finally {
          setModalBusy(false);
        }
      }

      async function action(method, params, timeout, successText) {
        if (!requireConnector()) return;
        const result = await callConnector(method, params, timeout);
        notify(result.ok ? successText : result.message || t("actionFailed"), !result.ok);
        await refreshConnections();
      }

      async function toggleConnection(item) {
        await action(
          "setEnabled",
          { key: item.key, enabled: item.enabled === false },
          130_000,
          t("enableSuccess"),
        );
      }

      async function checkConnection(item) {
        await action(
          "healthCheck",
          item.connectorId ? { connectorId: item.connectorId } : {},
          20_000,
          t("checkSuccess"),
        );
      }

      async function reconnectConnection(item) {
        await action("reconnect", { key: item.key }, 30_000, t("reconnectSuccess"));
      }

      async function uninstallConnection(item) {
        if (!window.confirm(t("confirmUninstall"))) return;
        await action("disconnect", { key: item.key }, 30_000, t("uninstallSuccess"));
      }

      async function updateAll() {
        if (!requireConnector()) return;
        setUpdating(true);
        const catalog = await callConnector("refreshCatalog", {}, 60_000);
        if (!catalog.ok) {
          setUpdating(false);
          notify(catalog.message || t("actionFailed"), true);
          return;
        }
        const health = await callConnector("healthCheck", {}, 20_000);
        setUpdating(false);
        notify(health.ok ? t("refreshSuccess") : health.message || t("actionFailed"), !health.ok);
        await refreshConnections();
      }

      const renderDetail = () => {
        if (!selected) {
          return h(
            "div",
            { className: "mc-empty" },
            h("strong", null, t("empty")),
            h("p", null, t("emptyHint")),
          );
        }

        const detailUrl = `${siteUrl}${selected.detail_path}`;
        const copyKey = `${selected.name}:${install ? install.id : "none"}`;

        return h(
          "section",
          { className: "mc-detail", "aria-label": selected.display_name },
          selected.possibly_broken &&
            h("p", { className: "mc-broken" }, t("broken")),
          h(
            "div",
            { className: "mc-detail-head" },
            h(EntryIcon, { entry: selected, large: true }),
            h(
              "div",
              { style: { minWidth: 0 } },
              h(
                "div",
                { className: "mc-detail-title-row" },
                h("h3", { className: "mc-detail-title" }, selected.display_name),
                h(
                  "div",
                  { className: "mc-badges" },
                  selected.official && h(Badge, { tone: "official" }, t("official")),
                  selected.verified && h(Badge, { tone: "verified" }, t("verified")),
                  h(
                    Badge,
                    { tone: "transport" },
                    transportLabel(t, selected.transport?.type),
                  ),
                ),
              ),
              h("p", { className: "mc-detail-desc" }, selected.description),
              h(
                "div",
                { className: "mc-links" },
                h(
                  "a",
                  { href: selected.homepage, target: "_blank", rel: "noreferrer" },
                  t("homepage"),
                ),
                selected.repository &&
                  h(
                    "a",
                    {
                      href: selected.repository,
                      target: "_blank",
                      rel: "noreferrer",
                    },
                    t("repository"),
                  ),
                h(
                  "a",
                  { href: detailUrl, target: "_blank", rel: "noreferrer" },
                  t("online"),
                ),
              ),
              h(
                "button",
                {
                  type: "button",
                  className: "mc-primary",
                  style: { marginTop: 10 },
                  onClick: () => openInstall(selected),
                },
                t("installToConnector"),
              ),
            ),
          ),
          h(
            "div",
            { className: "mc-section" },
            h(
              "div",
              { className: "mc-section-head" },
              h("h4", { className: "mc-section-title" }, t("installTitle")),
              h("span", { className: "mc-section-note" }, install?.filename || ""),
            ),
            selected.install.length === 0
              ? h("p", { className: "mc-hint" }, t("noInstall"))
              : h(
                  "div",
                  { className: "mc-tabs", role: "tablist" },
                  selected.install.map((item) =>
                    h(
                      "button",
                      {
                        key: item.id,
                        type: "button",
                        className: `mc-tab ${install?.id === item.id ? "active" : ""}`,
                        role: "tab",
                        "aria-selected": install?.id === item.id ? "true" : "false",
                        onClick: () => setInstallId(item.id),
                      },
                      item.label,
                    ),
                  ),
                ),
            install &&
              h(
                "div",
                { className: "mc-code-shell" },
                h(
                  "div",
                  { className: "mc-code-head" },
                  h("span", null, install.filename),
                  h(
                    "button",
                    {
                      type: "button",
                      className: `mc-copy ${copied === copyKey ? "copied" : ""}`,
                      onClick: () => copy(install.code, copyKey, t),
                    },
                    copied === copyKey
                      ? t("copied")
                      : copied === `${copyKey}:failed`
                        ? t("copyFailed")
                        : t("copy"),
                  ),
                ),
                h(Code, { code: install.code }),
              ),
            h("p", { className: "mc-hint" }, t("configHint")),
            h(
              "div",
              { className: "mc-callout" },
              h("div", { className: "mc-callout-title" }, "▲ ", t("requiredTitle")),
              required.length === 0
                ? h("p", { className: "mc-required-empty" }, t("noRequired"))
                : h(
                    "ul",
                    { className: "mc-required" },
                    required.map((credential) =>
                      h(
                        "li",
                        { key: `${credential.kind}:${credential.name}` },
                        h(
                          "div",
                          null,
                          h("code", null, credential.name),
                          ` ${credential.description || ""}`,
                        ),
                        h(
                          "a",
                          {
                            href: credential.obtain_at || selected.homepage,
                            target: "_blank",
                            rel: "noreferrer",
                          },
                          credential.obtain_at ? t("apply") : t("docs"),
                        ),
                      ),
                    ),
                  ),
            ),
          ),
          h(
            "div",
            { className: "mc-section" },
            h("h4", { className: "mc-section-title" }, t("about")),
            h(
              "dl",
              { className: "mc-info" },
              h("div", null, h("dt", null, t("transport")), h("dd", null, transportLabel(t, selected.transport?.type))),
              h("div", null, h("dt", null, t("license")), h("dd", null, selected.license)),
              h("div", null, h("dt", null, t("lastChecked")), h("dd", null, selected.last_checked)),
              h("div", null, h("dt", null, t("tools")), h("dd", null, `${selected.tools.length}`)),
              h("div", null, h("dt", null, "ID"), h("dd", null, selected.name)),
              h("div", null, h("dt", null, t("sourceOfficial")), h("dd", null, selected.official ? t("sourceOfficial") : t("sourceCommunity"))),
            ),
          ),
          h(
            "div",
            { className: "mc-tools", style: { marginTop: 14 } },
            h(
              "details",
              null,
              h("summary", null, `${t("toolList")} (${selected.tools.length})`),
              selected.tools.length === 0
                ? h("p", { className: "mc-hint" }, t("noTools"))
                : h(
                    "ul",
                    { className: "mc-tool-list" },
                    selected.tools.map((tool) =>
                      h(
                        "li",
                        { key: tool.name },
                        h(
                          "div",
                          { className: "mc-tool-name" },
                          h("code", null, tool.name),
                          tool.side_effect &&
                            h("span", { className: "mc-tool-warn", title: t("sideEffect") }, "⚠"),
                        ),
                        h("p", { className: "mc-tool-desc" }, tool.description),
                      ),
                    ),
                  ),
            ),
          ),
          h("p", { className: "mc-foot" }, `${t("snapshot")} · ${DATA.generated_at}`),
        );
      };

      const renderInstalled = () => {
        const items = connector.items;
        const available = connector.available === true;
        return h(
          "div",
          null,
          h(
            "div",
            { className: "mc-installed-head" },
            h(
              "div",
              null,
              h(
                "h3",
                { className: "mc-installed-title" },
                `${t("installedTab")} (${items.length})`,
              ),
              h("p", { className: "mc-installed-sub" }, t("connectorHint")),
            ),
            h(
              "div",
              { className: "mc-toolbar-actions" },
              h(
                "button",
                {
                  type: "button",
                  className: "mc-secondary",
                  onClick: () => refreshConnections(),
                  disabled: connector.loading,
                },
                connector.loading ? t("loading") : t("refresh"),
              ),
              h(
                "button",
                {
                  type: "button",
                  className: "mc-secondary",
                  onClick: updateAll,
                  disabled: updating || !available,
                },
                updating ? t("updating") : t("updateAll"),
              ),
              h(
                "button",
                {
                  type: "button",
                  className: "mc-secondary",
                  onClick: () =>
                    action("healthCheck", {}, 20_000, t("checkSuccess")),
                  disabled: !available,
                },
                t("checkAll"),
              ),
            ),
          ),
          connector.available === false
            ? h(
                "div",
                { className: "mc-callout" },
                h("div", { className: "mc-callout-title" }, t("connectorUnavailable")),
                h("p", { className: "mc-required-empty" }, connector.message || t("connectorHint")),
                typeof openConnector === "function" &&
                  h(
                    "button",
                    {
                      type: "button",
                      className: "mc-secondary",
                      style: { marginTop: 7 },
                      onClick: () => {
                        if (!openConnector()) notify(t("connectorUnavailable"), true);
                      },
                    },
                    t("openConnector"),
                  ),
              )
            : connector.loading && items.length === 0
              ? h("div", { className: "mc-loading" }, t("loading"))
              : items.length === 0
                ? h(
                    "div",
                    { className: "mc-empty" },
                    h("strong", null, t("installedEmpty")),
                    h("p", null, t("connectorHint")),
                  )
                : h(
                    "div",
                    { className: "mc-installed-list" },
                    items.map((item, index) => {
                      const enabled = item.enabled !== false;
                      const displayName = item.name || item.key || `#${index + 1}`;
                      return h(
                        "article",
                        { className: "mc-installed-row", key: item.key || `${displayName}:${index}` },
                        h(
                          "div",
                          { className: "mc-installed-copy" },
                          h(
                            "div",
                            { className: "mc-installed-name" },
                            h(EntryIcon, { entry: { name: displayName, display_name: displayName } }),
                            h("span", null, displayName),
                          ),
                          h("div", { className: "mc-installed-key" }, item.key || ""),
                        ),
                        h(
                          "div",
                          { className: "mc-installed-badges" },
                          h(
                            "span",
                            { className: `mc-badge ${enabled ? "mc-badge-verified" : "mc-badge-transport"}` },
                            enabled ? t("enabled") : t("disabled"),
                          ),
                          h(
                            "span",
                            { className: "mc-badge mc-badge-transport" },
                            connectionStateLabel(t, item),
                          ),
                        ),
                        h(
                          "div",
                          { className: "mc-row-actions" },
                          h(
                            "button",
                            {
                              type: "button",
                              className: "mc-secondary",
                              onClick: () => toggleConnection(item),
                            },
                            enabled ? t("disable") : t("enable"),
                          ),
                          h(
                            "button",
                            {
                              type: "button",
                              className: "mc-secondary",
                              onClick: () => checkConnection(item),
                            },
                            t("check"),
                          ),
                          h(
                            "button",
                            {
                              type: "button",
                              className: "mc-secondary",
                              onClick: () => reconnectConnection(item),
                            },
                            t("reconnect"),
                          ),
                          h(
                            "button",
                            {
                              type: "button",
                              className: "mc-secondary",
                              disabled: item.canEditConfiguration === false,
                              title:
                                item.canEditConfiguration === false
                                  ? t("editLoadFailed")
                                  : undefined,
                              onClick: () => openEdit(item),
                            },
                            t("edit"),
                          ),
                          h(
                            "button",
                            {
                              type: "button",
                              className: "mc-secondary danger",
                              onClick: () => uninstallConnection(item),
                            },
                            t("uninstall"),
                          ),
                        ),
                      );
                    }),
                  ),
        );
      };

      const renderModal = () => {
        if (!modal) return null;
        const modalRequired =
          modal.kind === "install"
            ? modal.entry?.credentials.filter((credential) => credential.required) ?? []
            : [];
        return h(
          "div",
          {
            className: "mc-modal-mask",
            onMouseDown: (event) => {
              if (event.target === event.currentTarget && !modalBusy) setModal(null);
            },
          },
          h(
            "div",
            {
              className: "mc-modal",
              role: "dialog",
              "aria-modal": "true",
              "aria-label": modal.title,
            },
            h(
              "div",
              { className: "mc-modal-head" },
              h("h3", { className: "mc-modal-title" }, modal.title),
              h(
                "p",
                { className: "mc-modal-note" },
                modal.kind === "install" ? t("installHint") : t("editHint"),
              ),
              modalRequired.length > 0 &&
                h(
                  "ul",
                  { className: "mc-modal-required" },
                  modalRequired.map((credential) =>
                    h(
                      "li",
                      { key: `${credential.kind}:${credential.name}` },
                      h("code", null, credential.name),
                      ` — ${credential.description || ""}`,
                    ),
                  ),
                ),
            ),
            h(
              "div",
              { className: "mc-modal-body" },
              h("textarea", {
                className: "mc-textarea",
                value: modal.json,
                spellCheck: false,
                onChange: (event) =>
                  setModal((current) =>
                    current ? { ...current, json: event.target.value } : current,
                  ),
              }),
            ),
            h(
              "div",
              { className: "mc-modal-actions" },
              h(
                "button",
                {
                  type: "button",
                  className: "mc-secondary",
                  disabled: modalBusy,
                  onClick: () => setModal(null),
                },
                t("cancel"),
              ),
              h(
                "button",
                {
                  type: "button",
                  className: "mc-primary",
                  disabled: modalBusy,
                  onClick: submitModal,
                },
                modalBusy
                  ? modal.kind === "install"
                    ? t("importing")
                    : t("saving")
                  : modal.kind === "install"
                    ? t("import")
                    : t("save"),
              ),
            ),
          ),
        );
      };

      return h(
        "div",
        { className: "mc-root" },
        h("style", null, CSS),
        h(
          "header",
          { className: "mc-head" },
          h(
            "div",
            null,
            h("p", { className: "mc-eyebrow" }, "DSH · MCP CENTER"),
            h("h2", { className: "mc-title" }, t("title")),
            h("p", { className: "mc-sub" }, t("subtitle")),
          ),
          h(
            "div",
            { className: "mc-head-side" },
            h("span", { className: "mc-count" }, `${DATA.entries.length} ${t("entries")}`),
            h(
              "a",
              { className: "mc-open-site", href: siteUrl, target: "_blank", rel: "noreferrer" },
              t("onlineMarket"),
              " ↗",
            ),
          ),
        ),
        h(
          "div",
          { className: "mc-view-tabs", role: "tablist" },
          h(
            "button",
            {
              type: "button",
              role: "tab",
              className: `mc-view-tab ${view === "catalog" ? "active" : ""}`,
              "aria-selected": view === "catalog" ? "true" : "false",
              onClick: () => setView("catalog"),
            },
            t("marketTab"),
          ),
          h(
            "button",
            {
              type: "button",
              role: "tab",
              className: `mc-view-tab ${view === "installed" ? "active" : ""}`,
              "aria-selected": view === "installed" ? "true" : "false",
              onClick: () => setView("installed"),
            },
            t("installedTab"),
            h("span", { className: "mc-view-count" }, connector.items.length),
          ),
        ),
        view === "catalog" &&
          h(
            React.Fragment,
            null,
            h(
              "div",
              { className: "mc-toolbar" },
              h(
                "label",
                { className: "mc-search" },
            h(
              "svg",
              { viewBox: "0 0 20 20", "aria-hidden": true },
              h("circle", { cx: 8.5, cy: 8.5, r: 5.5 }),
              h("path", { d: "m13 13 4 4" }),
            ),
            h("input", {
              value: query,
              onChange: (event) => setQuery(event.target.value),
              placeholder: t("search"),
              "aria-label": t("search"),
              type: "search",
              spellCheck: false,
            }),
          ),
          h(
            "div",
            { className: "mc-cats", role: "group", "aria-label": t("all") },
            categories.map((item) =>
              h(
                "button",
                {
                  key: item.value,
                  type: "button",
                  className: `mc-cat ${category === item.value ? "active" : ""}`,
                  "aria-pressed": category === item.value,
                  onClick: () => setCategory(item.value),
                },
                item.name,
                h("span", { className: "mc-cat-count" }, item.count),
              ),
            ),
          ),
        ),
        h(
          "div",
          { className: "mc-body" },
          h(
            "div",
            { className: "mc-list" },
            filtered.length === 0
              ? h(
                  "div",
                  { className: "mc-empty" },
                  h("strong", null, t("empty")),
                  h("p", null, t("emptyHint")),
                )
              : filtered.map((entry) =>
                  h(
                    "button",
                    {
                      key: entry.name,
                      type: "button",
                      className: `mc-card ${selected?.name === entry.name ? "active" : ""}`,
                      onClick: () => {
                        setSelectedName(entry.name);
                        setInstallId("");
                      },
                    },
                    h(
                      "div",
                      { className: "mc-card-head" },
                      h(EntryIcon, { entry }),
                      h(
                        "div",
                        { className: "mc-card-copy" },
                        h("span", { className: "mc-card-title" }, entry.display_name),
                        h("p", { className: "mc-card-desc" }, entry.description),
                        h(
                          "div",
                          { className: "mc-card-meta" },
                          h("span", null, entry.categories.join(" · ")),
                          h("span", null, "·"),
                          h("span", null, `${entry.tools.length} ${t("tools")}`),
                          h("span", null, "·"),
                          h("span", null, entry.last_checked),
                        ),
                      ),
                    ),
                    h(
                      "div",
                      { className: "mc-badges", style: { marginTop: 7 } },
                      entry.official && h(Badge, { tone: "official" }, t("official")),
                      entry.verified && h(Badge, { tone: "verified" }, t("verified")),
                      h(Badge, { tone: "transport" }, transportLabel(t, entry.transport?.type)),
                      entry.possibly_broken && h(Badge, { tone: "broken" }, "⚠"),
                    ),
                  ),
                ),
          ),
              renderDetail(),
            ),
          ),
        view === "installed" && renderInstalled(),
        renderModal(),
        toast &&
          h(
            "div",
            { className: `mc-toast ${toast.bad ? "bad" : ""}` },
            toast.message,
          ),
      );
    }

    return {
      inject: ["slots", "locale"],
      apply(ctx) {
        ctx.effect(
          () => ctx.locale.register(NS, DICTS),
          "dsh-mcp-center: dictionaries",
        );
        const t = ctx.locale.bind(NS);
        let layout;
        ctx.inject(["layout"], (scoped) => {
          layout = scoped.layout;
        });
        const openConnector = () => {
          try {
            if (layout?.selectPanel) {
              layout.selectPanel("mcp-connector");
              return true;
            }
          } catch {
            // The connector plugin may not be installed.
          }
          return false;
        };
        ctx.slots.inject("plugins.tab", () =>
          ctx.slots.register(
            {
              name: "plugins.tab",
              id: NS,
              order: 10,
              label: () => t("nav"),
              locale: NS,
            },
            (ownerProps) => h(MarketView, { ...ownerProps, t, openConnector }),
          ),
        );
      },
    };
  },
});
