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
        width: 100%;
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
      .mc-root button.mc-primary {
        color: #fff;
        color: var(--dsw-static-neutral-00);
      }
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
      .mc-installed-status {
        overflow: hidden;
        margin-top: 2px;
        color: var(--dsw-alias-label-tertiary);
        font-size: 9.5px;
        line-height: 1.45;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .mc-installed-status.ok { color: var(--dsw-alias-state-success-primary); }
      .mc-installed-status.bad { color: var(--dsw-alias-state-error-primary); }
      .mc-installed-status.pending { color: var(--dsw-alias-brand-primary); }
      .mc-action-feedback {
        margin: 0 0 9px;
        padding: 7px 9px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 6px;
        background: var(--dsw-alias-bg-layer-1);
        color: var(--dsw-alias-label-secondary);
        font-size: 10px;
        line-height: 1.5;
      }
      .mc-action-feedback.ok {
        border-color: color-mix(in srgb, var(--dsw-alias-state-success-primary) 30%, transparent);
        color: var(--dsw-alias-state-success-primary);
      }
      .mc-action-feedback.bad {
        border-color: color-mix(in srgb, var(--dsw-alias-state-error-primary) 30%, transparent);
        color: var(--dsw-alias-state-error-primary);
      }
      .mc-action-feedback.pending { color: var(--dsw-alias-brand-primary); }
      .mc-tool-toggle {
        margin-top: 3px;
        padding: 0;
        border: 0;
        background: transparent;
        color: var(--dsw-alias-link);
        font-size: 9px;
        cursor: pointer;
      }
      .mc-tool-toggle:hover { text-decoration: underline; }
      .mc-installed-tools {
        flex-basis: 100%;
        max-height: 220px;
        overflow: auto;
        margin-top: 2px;
        padding: 7px 9px;
        border-top: 1px solid var(--dsw-alias-border-l1);
      }
      .mc-installed-tool {
        display: grid;
        grid-template-columns: minmax(140px, 210px) minmax(0, 1fr);
        gap: 8px;
        padding: 3px 0;
        color: var(--dsw-alias-label-secondary);
        font-size: 9.5px;
        line-height: 1.45;
      }
      .mc-installed-tool code {
        overflow: hidden;
        color: var(--dsw-alias-label-primary);
        font-family: ui-monospace, monospace;
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
      .mc-form { display: grid; gap: 12px; }
      .mc-field { display: grid; gap: 4px; min-width: 0; }
      .mc-field-head {
        display: flex;
        align-items: baseline;
        gap: 4px;
        flex-wrap: wrap;
        color: var(--dsw-alias-label-primary);
        font-size: 11px;
        font-weight: 600;
      }
      .mc-field-head small {
        color: var(--dsw-alias-label-tertiary);
        font-size: 9px;
        font-weight: 400;
      }
      .mc-required-mark { color: var(--dsw-alias-state-error-primary); font-weight: 700; }
      .mc-input {
        width: 100%;
        min-height: 32px;
        padding: 6px 8px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 6px;
        outline: 0;
        background: var(--dsw-alias-bg-base);
        color: var(--dsw-alias-label-primary);
        font-size: 11px;
      }
      .mc-input:focus { border-color: var(--dsw-alias-brand-primary); }
      .mc-input::placeholder { color: var(--dsw-alias-label-tertiary); }
      .mc-field-help {
        color: var(--dsw-alias-label-tertiary);
        font-size: 9.5px;
        line-height: 1.5;
      }
      .mc-field-help a { margin-left: 2px; }
      .mc-args { min-height: 88px; font-size: 10.5px; }
      .mc-transport-line {
        display: flex;
        align-items: center;
        gap: 5px;
        min-width: 0;
        padding: 7px 9px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 6px;
        background: var(--dsw-alias-bg-layer-1);
        color: var(--dsw-alias-label-tertiary);
        font-size: 9.5px;
      }
      .mc-transport-line code {
        min-width: 0;
        overflow: hidden;
        color: var(--dsw-alias-label-secondary);
        font-family: ui-monospace, monospace;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .mc-form-note {
        margin: 0;
        padding: 8px 9px;
        border-radius: 6px;
        background: var(--dsw-alias-bg-layer-1);
        color: var(--dsw-alias-label-tertiary);
        font-size: 10px;
      }
      .mc-form-error {
        margin: 10px 0 0;
        padding: 8px 9px;
        border: 1px solid color-mix(in srgb, var(--dsw-alias-state-error-primary) 35%, transparent);
        border-radius: 6px;
        background: color-mix(in srgb, var(--dsw-alias-state-error-primary) 8%, transparent);
        color: var(--dsw-alias-state-error-primary);
        font-size: 10.5px;
        line-height: 1.5;
      }
      .mc-credential-toolbar { display: flex; justify-content: flex-start; margin-top: 8px; }
      .mc-credential-panel {
        margin-top: 8px;
        padding: 9px 10px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 7px;
        background: var(--dsw-alias-bg-layer-1);
      }
      .mc-credential-note {
        margin: 0 0 7px;
        color: var(--dsw-alias-label-tertiary);
        font-size: 9.5px;
        line-height: 1.55;
      }
      .mc-credential-panel-head {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 8px;
      }
      .mc-credential-panel-head .mc-credential-note { margin: 0 0 7px; }
      .mc-credential-panel-head .mc-secondary { flex: none; }
      .mc-credential-copy-form {
        display: grid;
        gap: 10px;
        margin-top: 12px;
        padding-top: 10px;
        border-top: 1px solid var(--dsw-alias-border-l1);
      }
      .mc-credential-list { display: grid; gap: 4px; }
      .mc-credential-row {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: 10px;
        min-width: 0;
        font-size: 9.5px;
      }
      .mc-credential-row > span { color: var(--dsw-alias-label-secondary); }
      .mc-credential-row > code {
        overflow: hidden;
        color: var(--dsw-alias-label-primary);
        font-family: ui-monospace, monospace;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .mc-backup-actions {
        display: flex;
        align-items: center;
        gap: 5px;
        flex-wrap: wrap;
        margin-bottom: 8px;
      }
      .mc-backup .mc-textarea { min-height: 130px; }
      .mc-backup .mc-section-title { margin: 14px 0 6px; }
      .mc-snapshot-list { display: grid; gap: 5px; }
      .mc-snapshot-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        padding: 7px 8px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 6px;
      }
      .mc-snapshot-copy { min-width: 0; display: grid; gap: 2px; }
      .mc-snapshot-copy strong {
        overflow: hidden;
        color: var(--dsw-alias-label-primary);
        font-size: 10px;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .mc-snapshot-copy span { color: var(--dsw-alias-label-tertiary); font-size: 9px; }
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
      if (state === "unknown" && item.toolsAvailable) return t("connected");
      const labels = {
        healthy: t("connected"),
        connected: t("connected"),
        ready: t("connected"),
        degraded: t("degraded"),
        reauth: t("reauthorize"),
        "needs-auth": t("reauthorize"),
        reauthorize: t("reauthorize"),
        recovering: t("recovering"),
        unavailable: t("connectionError"),
        error: t("connectionError"),
        disconnected: t("notConnected"),
        configured: t("configured"),
        disabled: t("disabled"),
        unknown: t("stateUnknown"),
      };
      return labels[state] ?? labels[state ?? "unknown"];
    }

    function parseConnectionEditorSummary(json) {
      try {
        const document = JSON.parse(json);
        const connection = Array.isArray(document?.connections)
          ? document.connections[0]
          : document?.mcpServers && typeof document.mcpServers === "object"
            ? Object.values(document.mcpServers)[0]
            : null;
        if (!connection || typeof connection !== "object") return null;
        const masked = "••••••";
        const maskUrl = (raw) => {
          if (raw === "<KEEP_EXISTING>") return { value: "", hidden: true };
          try {
            const url = new URL(raw);
            for (const key of [...url.searchParams.keys()]) {
              url.searchParams.set(key, "***");
            }
            if (url.username) url.username = masked;
            if (url.password) url.password = masked;
            return { value: url.toString(), hidden: url.search.length > 0 };
          } catch {
            return { value: String(raw), hidden: false };
          }
        };
        const url = connection.url ? maskUrl(connection.url) : null;
        return {
          authMode: connection.authMode || "none",
          url,
          headers: Object.entries(connection.headers ?? {}).map(([name]) => ({
            name,
            value: masked,
          })),
          env: Object.entries(connection.env ?? {}).map(([name]) => ({
            name,
            value: masked,
          })),
          bearerToken: connection.bearerToken ? masked : "",
          apiKeyHeader: connection.apiKeyHeader || "",
          apiKeyValue: connection.apiKeyValue ? masked : "",
        };
      } catch {
        return null;
      }
    }

    function maskConnectionUrl(raw) {
      try {
        const url = new URL(String(raw));
        for (const key of [...url.searchParams.keys()]) {
          url.searchParams.set(key, "***");
        }
        if (url.username) url.username = "***";
        if (url.password) url.password = "***";
        return url.toString();
      } catch {
        return String(raw ?? "");
      }
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
    const CREDENTIAL_API = "/dsh-mcp-center/api/credentials";
    const CONNECTOR_TIMEOUTS = {
      status: 20_000,
      catalog: 30_000,
      configure: 145_000,
      importJson: 145_000,
      reconfigureConnection: 145_000,
      setEnabled: 130_000,
      healthCheck: 20_000,
      reconnect: 30_000,
      disconnect: 30_000,
      refreshCatalog: 90_000,
      connect: 310_000,
      editableConnectionConfig: 20_000,
      renameConnection: 20_000,
      setInjectionMode: 30_000,
      listSnapshots: 20_000,
      createSnapshot: 30_000,
      previewSnapshot: 20_000,
      restoreSnapshot: 145_000,
      exportConfig: 20_000,
    };

    function credentialFieldKey(credential) {
      return `${credential.kind}:${credential.name}`;
    }

    function slugServerName(input) {
      const slug = String(input)
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9_-]+/g, "-")
        .replace(/^[^a-z0-9]+/, "")
        .replace(/[^a-z0-9]+$/, "")
        .slice(0, 63);
      return slug || "mcp-server";
    }

    function normalizeRemoteUrl(value) {
      try {
        const url = new URL(String(value));
        return `${url.origin}${url.pathname}`.replace(/\/$/, "");
      } catch {
        return String(value ?? "").replace(/\/$/, "");
      }
    }

    function normalizeEndpoint(value) {
      try {
        const url = new URL(String(value));
        return `${url.origin}${url.pathname}`.replace(/\/$/, "");
      } catch {
        return "";
      }
    }

    function findMarketEntryForConnection(item) {
      return (
        DATA.entries.find((entry) => slugServerName(entry.name) === item.serverName) ||
        DATA.entries.find((entry) => entry.display_name === item.name) ||
        DATA.entries.find(
          (entry) =>
            entry.transport?.url &&
            item.url &&
            normalizeEndpoint(entry.transport.url) === normalizeEndpoint(item.url),
        ) ||
        null
      );
    }

    function buildInstallPayload(entry, form) {
      const values = form.values ?? {};
      const get = (credential) => String(values[credentialFieldKey(credential)] ?? "").trim();
      const missing = (entry.credentials ?? [])
        .filter((credential) => credential.required && !get(credential))
        .map((credential) => credential.name);
      if (missing.length > 0) return { ok: false, missing };

      if (entry.transport.type === "stdio") {
        const env = {};
        for (const credential of entry.credentials ?? []) {
          const value = get(credential);
          if (credential.kind === "环境变量" && value) env[credential.name] = value;
        }
        const args = String(form.argsText ?? "")
          .split(/\r?\n/)
          .map((line) => line.trim())
          .filter(Boolean);
        const params = {
          name: entry.display_name,
          serverName: slugServerName(entry.name),
          transport: "stdio",
          command: entry.transport.command,
          args,
          envJson: JSON.stringify(env),
        };
        const cwd = String(form.cwd ?? "").trim();
        if (cwd) params.cwd = cwd;
        return { ok: true, params };
      }

      let url = String(entry.transport.url ?? "");
      for (const key of Object.keys(entry.transport.variables ?? {})) {
        const credential = (entry.credentials ?? []).find(
          (candidate) => candidate.name === `{${key}}` || candidate.name === key,
        );
        if (!credential) continue;
        url = url.split(`{${key}}`).join(encodeURIComponent(get(credential)));
      }
      if (/\{[^}]+\}/.test(url)) return { ok: false, missing: ["URL"] };

      const headers = {};
      for (const header of entry.transport.headers ?? []) {
        const credential = (entry.credentials ?? []).find(
          (candidate) => candidate.kind === "Header" && candidate.name === header.name,
        );
        if (!credential) continue;
        let value = get(credential);
        if (!value) continue;
        if (/^authorization$/i.test(header.name) && !/^Bearer\s/i.test(value)) {
          value = `Bearer ${value}`;
        }
        headers[header.name] = value;
      }

      return {
        ok: true,
        params: {
          name: entry.display_name,
          serverName: slugServerName(entry.name),
          transport: "streamable-http",
          url,
          headersJson: JSON.stringify(headers),
          authMode: "none",
          allowInsecurePrivateNetwork: false,
        },
      };
    }

    async function callCredentialStore(method, body, timeoutMs = 10_000) {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), timeoutMs);
      try {
        const response = await fetch(CREDENTIAL_API, {
          method,
          headers: { "content-type": "application/json", accept: "application/json" },
          body: body === undefined ? undefined : JSON.stringify(body),
          credentials: "same-origin",
          cache: "no-store",
          signal: controller.signal,
        });
        let data;
        try {
          data = await response.json();
        } catch {
          return { ok: false, message: `凭据副本服务返回了无效响应（HTTP ${response.status}）` };
        }
        if (!response.ok && data?.ok !== false) {
          return { ok: false, message: `HTTP ${response.status}` };
        }
        return data;
      } catch (error) {
        return {
          ok: false,
          message: controller.signal.aborted
            ? "凭据副本服务超时"
            : `凭据副本服务不可用：${error?.message || error}`,
        };
      } finally {
        clearTimeout(timer);
      }
    }

    async function loadCredentialCopy(serverName) {
      if (!serverName) return null;
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 10_000);
      try {
        const response = await fetch(
          `${CREDENTIAL_API}?serverName=${encodeURIComponent(serverName)}`,
          {
            headers: { accept: "application/json" },
            credentials: "same-origin",
            cache: "no-store",
            signal: controller.signal,
          },
        );
        if (response.status === 404) return null;
        const data = await response.json();
        return data.ok ? data.entry : null;
      } catch {
        return null;
      } finally {
        clearTimeout(timer);
      }
    }

    async function saveCredentialCopy(serverName, label, fields) {
      return callCredentialStore("POST", { serverName, label, fields });
    }

    async function deleteCredentialCopy(serverName) {
      if (!serverName) return;
      await callCredentialStore("DELETE", { serverName });
    }

    function buildCredentialFields(entry, values) {
      return (entry?.credentials ?? [])
        .map((credential) => {
          const key = credentialFieldKey(credential);
          return {
            key,
            label: credential.name,
            kind: credential.kind,
            secret: credential.secret === true,
            value: String(values?.[key] ?? ""),
          };
        })
        .filter((field) => field.value.trim().length > 0);
    }

    async function callConnector(method, params = {}, timeoutMs = 30_000) {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), timeoutMs);
      try {
        const response = await fetch(CONNECTOR_API, {
          method: "POST",
          headers: { "content-type": "application/json", accept: "application/json" },
          body: JSON.stringify({ method, params }),
          credentials: "same-origin",
          cache: "no-store",
          signal: controller.signal,
        });
        let data;
        try {
          data = await response.json();
        } catch {
          return {
            ok: false,
            message:
              response.status === 401
                ? "登录状态已失效，请刷新页面"
                : `MCP 连接器返回了无效响应（HTTP ${response.status}）`,
          };
        }
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
      const [busy, setBusy] = useState({});
      const [actionResults, setActionResults] = useState({});
      const [expandedTools, setExpandedTools] = useState({});
      const statusSequence = useRef(0);

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
      const installedServerNames = useMemo(
        () => new Set(connector.items.map((item) => item.serverName).filter(Boolean)),
        [connector.items],
      );
      const isEntryInstalled = (entry) =>
        installedServerNames.has(slugServerName(entry.name));

      async function refreshConnections() {
        const sequence = ++statusSequence.current;
        setConnector((current) => ({ ...current, loading: true }));
        const result = await callConnector("status", {}, CONNECTOR_TIMEOUTS.status);
        if (sequence !== statusSequence.current) return;
        if (result.ok) {
          const rawItems = Array.isArray(result.detail?.items) ? result.detail.items : [];
          const items = await Promise.all(
            rawItems.map(async (item) => {
              if (item.enabled === false || !item.connectorId) return item;
              const tools = await callConnector(
                "toolsList",
                {
                  connectorId: item.connectorId,
                  connectionKey: item.key,
                  cachedOnly: true,
                },
                10_000,
              );
              const count = Number(tools.detail?.totalTools ?? 0);
              const cachedTools = (tools.detail?.servers ?? []).flatMap((server) =>
                (server.tools ?? []).map((tool) => ({
                  name: tool.name,
                  description: tool.description || "",
                })),
              );
              return {
                ...item,
                cachedToolCount: Number.isFinite(count) ? count : cachedTools.length,
                cachedTools,
                toolsAvailable: count > 0 || cachedTools.length > 0,
              };
            }),
          );
          if (sequence !== statusSequence.current) return;
          setConnector({
            available: true,
            loading: false,
            items,
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
        const values = {};
        for (const credential of entry.credentials ?? []) {
          values[credentialFieldKey(credential)] = "";
        }
        setModal({
          kind: "install",
          entry,
          title: `${t("installNow")} · ${entry.display_name}`,
          values,
          argsText:
            entry.transport.type === "stdio"
              ? (entry.transport.args ?? []).join("\n")
              : "",
          cwd: "",
          error: "",
        });
      }

      function openUninstall(item) {
        setModal({
          kind: "confirm",
          title: `${t("uninstall")} · ${item.name || item.key}`,
          message: t("confirmUninstall"),
          key: item.key,
          serverName: item.serverName || "",
        });
      }

      async function openEdit(item) {
        if (!requireConnector()) return;
        const result = await callConnector(
          "editableConnectionConfig",
          { key: item.key },
          CONNECTOR_TIMEOUTS.editableConnectionConfig,
        );
        if (!result.ok) {
          notify(result.message || t("editLoadFailed"), true);
          return;
        }
        const serverName = item.serverName || slugServerName(item.name || item.key || "");
        const copyEntry = DATA.entries.find(
          (entry) => slugServerName(entry.name) === serverName,
        );
        const credentialCopy = await loadCredentialCopy(serverName);
        const copyValues = {};
        for (const credential of copyEntry?.credentials ?? []) {
          const fieldKey = credentialFieldKey(credential);
          copyValues[fieldKey] =
            credentialCopy?.fields?.find((field) => field.key === fieldKey)?.value ?? "";
        }
        setModal({
          kind: "edit",
          title: `${t("editTitle")} · ${item.name || item.key}`,
          json: result.detail?.json || "",
          key: item.key,
          itemUrl: item.url || "",
          serverName,
          copyEntry,
          credentialCopy,
          copyValues,
          error: "",
          showCredentials: false,
          showSecrets: false,
        });
      }

      function setModalError(message) {
        setModal((current) => (current ? { ...current, error: message } : current));
      }

      async function saveCopyFromModal() {
        if (!modal?.copyEntry) return;
        const fields = buildCredentialFields(modal.copyEntry, modal.copyValues ?? {});
        if (fields.length === 0) {
          setModalError(t("credentialCopyEmpty"));
          return;
        }
        setModalError("");
        setModalBusy(true);
        try {
          const result = await saveCredentialCopy(
            modal.serverName,
            modal.copyEntry.display_name,
            fields,
          );
          if (!result.ok) {
            setModalError(result.message || t("credentialCopyFailed"));
            return;
          }
          setModal((current) =>
            current
              ? { ...current, credentialCopy: result.entry, copySaved: true }
              : current,
          );
          notify(t("credentialCopySaved"));
        } finally {
          setModalBusy(false);
        }
      }

      function openRename(item) {
        setModal({
          kind: "rename",
          title: `${t("renameTitle")} · ${item.name || item.key}`,
          key: item.key,
          name: item.name || "",
          error: "",
        });
      }

      async function submitRename() {
        if (!modal?.name?.trim()) {
          setModalError(t("fillRequired"));
          return;
        }
        setModalBusy(true);
        try {
          const result = await callConnector(
            "renameConnection",
            { key: modal.key, name: modal.name.trim() },
            CONNECTOR_TIMEOUTS.renameConnection,
          );
          if (!result.ok) {
            setModalError(result.message || t("actionFailed"));
            return;
          }
          setModal(null);
          notify(result.message || t("rename"));
          await refreshConnections();
        } finally {
          setModalBusy(false);
        }
      }

      async function changeInjection(item) {
        const mode = item.injectionMode === "session" ? "always" : "session";
        await action(
          "setInjectionMode",
          { key: item.key, mode },
          CONNECTOR_TIMEOUTS.setInjectionMode,
          t("injectionChanged"),
          item.key,
        );
      }

      async function openBackup() {
        if (!requireConnector()) return;
        setModal({
          kind: "backup",
          title: t("backupTitle"),
          loading: true,
          exported: "",
          snapshots: [],
          error: "",
        });
        const [exported, snapshots] = await Promise.all([
          callConnector("exportConfig", {}, CONNECTOR_TIMEOUTS.exportConfig),
          callConnector("listSnapshots", {}, CONNECTOR_TIMEOUTS.listSnapshots),
        ]);
        setModal((current) =>
          current
            ? {
                ...current,
                loading: false,
                exported: exported.ok ? exported.detail?.json || "" : "",
                snapshots: snapshots.ok ? snapshots.detail?.items ?? [] : [],
                error:
                  !exported.ok || !snapshots.ok
                    ? exported.message || snapshots.message || t("actionFailed")
                    : "",
              }
            : current,
        );
      }

      async function createBackup() {
        setModalBusy(true);
        try {
          const result = await callConnector(
            "createSnapshot",
            { label: "MCP Center" },
            CONNECTOR_TIMEOUTS.createSnapshot,
          );
          if (!result.ok) {
            setModalError(result.message || t("actionFailed"));
            return;
          }
          notify(result.message || t("backupCreated"));
          const snapshots = await callConnector(
            "listSnapshots",
            {},
            CONNECTOR_TIMEOUTS.listSnapshots,
          );
          setModal((current) =>
            current && snapshots.ok
              ? { ...current, snapshots: snapshots.detail?.items ?? [] }
              : current,
          );
        } finally {
          setModalBusy(false);
        }
      }

      async function restoreBackup(snapshotId) {
        if (!window.confirm(t("restoreConfirm"))) return;
        setModalBusy(true);
        try {
          const preview = await callConnector(
            "previewSnapshot",
            { snapshotId },
            CONNECTOR_TIMEOUTS.previewSnapshot,
          );
          if (!preview.ok || preview.detail?.restorable === false) {
            setModalError(preview.message || t("notRestorable"));
            return;
          }
          const result = await callConnector(
            "restoreSnapshot",
            { snapshotId },
            CONNECTOR_TIMEOUTS.restoreSnapshot,
          );
          if (!result.ok) {
            setModalError(result.message || t("actionFailed"));
            return;
          }
          setModal(null);
          notify(result.message || t("refreshSuccess"));
          await refreshConnections();
        } finally {
          setModalBusy(false);
        }
      }

      function downloadBackup() {
        if (!modal?.exported) return;
        const blob = new Blob([modal.exported], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const anchor = document.createElement("a");
        anchor.href = url;
        anchor.download = "dsh-mcp-connections.redacted.json";
        anchor.click();
        setTimeout(() => URL.revokeObjectURL(url), 2000);
      }

      async function installFromCatalog(entry) {
        const catalog = await callConnector(
          "catalog",
          {},
          CONNECTOR_TIMEOUTS.catalog,
        );
        if (!catalog.ok) return null;
        const target = normalizeRemoteUrl(entry.transport.url);
        const match = (catalog.detail?.items ?? []).find((item) =>
          (item.servers ?? []).some(
            (server) => normalizeRemoteUrl(server.url) === target,
          ),
        );
        if (!match || !["oauth2-pkce", "none"].includes(match.authMode)) {
          return null;
        }
        return callConnector(
          "connect",
          { connectorId: match.id },
          CONNECTOR_TIMEOUTS.connect,
        );
      }

      async function submitInstall() {
        if (!modal?.entry) return;
        const built = buildInstallPayload(modal.entry, modal);
        if (!built.ok) {
          setModalError(
            built.missing?.length
              ? `${t("fillRequired")}: ${built.missing.join(", ")}`
              : t("installInvalid"),
          );
          return;
        }
        setModalError("");
        setModalBusy(true);
        try {
          let result = await callConnector(
            "configure",
            built.params,
            CONNECTOR_TIMEOUTS.configure,
          );
          if (
            !result.ok &&
            (modal.entry.credentials ?? []).length === 0 &&
            modal.entry.transport.type !== "stdio"
          ) {
            const fallback = await installFromCatalog(modal.entry);
            if (fallback) result = fallback;
          }
          if (!result.ok) {
            setModalError(result.message || t("actionFailed"));
            return;
          }
          const fields = buildCredentialFields(modal.entry, modal.values ?? {});
          const copySaved =
            fields.length === 0 ||
            (await saveCredentialCopy(
              slugServerName(modal.entry.name),
              modal.entry.display_name,
              fields,
            )).ok;
          setModal(null);
          setView("installed");
          notify(
            `${result.message || t("installSuccess")}${
              copySaved ? "" : ` · ${t("credentialCopyFailed")}`
            }`,
            !copySaved,
          );
          await refreshConnections();
        } finally {
          setModalBusy(false);
        }
      }

      async function submitEdit() {
        if (!modal) return;
        let parsed;
        try {
          parsed = JSON.parse(modal.json);
        } catch {
          setModalError(t("installJsonInvalid"));
          return;
        }
        setModalError("");
        setModalBusy(true);
        try {
          const result = await callConnector(
            "reconfigureConnection",
            { key: modal.key, json: JSON.stringify(parsed, null, 2) },
            CONNECTOR_TIMEOUTS.reconfigureConnection,
          );
          if (!result.ok) {
            setModalError(result.message || t("actionFailed"));
            return;
          }
          const fields = modal.copyEntry
            ? buildCredentialFields(modal.copyEntry, modal.copyValues ?? {})
            : [];
          const copySaved =
            fields.length === 0 ||
            (await saveCredentialCopy(
              modal.serverName,
              modal.copyEntry.display_name,
              fields,
            )).ok;
          setModal(null);
          setView("installed");
          notify(
            `${t("editSuccess")}${
              copySaved ? "" : ` · ${t("credentialCopyFailed")}`
            }`,
            !copySaved,
          );
          await refreshConnections();
        } finally {
          setModalBusy(false);
        }
      }

      async function submitConfirm() {
        if (!modal?.key) return;
        setModalBusy(true);
        try {
          const result = await callConnector(
            "disconnect",
            { key: modal.key },
            CONNECTOR_TIMEOUTS.disconnect,
          );
          if (!result.ok) {
            setModalError(result.message || t("actionFailed"));
            return;
          }
          await deleteCredentialCopy(modal.serverName);
          setModal(null);
          notify(t("uninstallSuccess"));
          await refreshConnections();
        } finally {
          setModalBusy(false);
        }
      }

      async function submitModal() {
        if (!modal) return;
        if (modal.kind === "install") return submitInstall();
        if (modal.kind === "edit") return submitEdit();
        if (modal.kind === "confirm") return submitConfirm();
        if (modal.kind === "rename") return submitRename();
      }

      async function action(method, params, timeout, successText, key) {
        if (!requireConnector()) return;
        if (key && busy[key]) return;
        if (key) {
          setBusy((current) => ({ ...current, [key]: true }));
          setActionResults((current) => ({ ...current, [key]: { pending: true } }));
        } else {
          setActionResults((current) => ({ ...current, __all: { pending: true } }));
        }
        try {
          const result = await callConnector(method, params, timeout);
          const message = result.ok
            ? result.message || successText
            : result.message || t("actionFailed");
          if (key) {
            setActionResults((current) => ({
              ...current,
              [key]: { ok: result.ok, message, at: Date.now() },
            }));
          } else {
            setActionResults((current) => ({
              ...current,
              __all: { ok: result.ok, message, at: Date.now() },
            }));
          }
          notify(message, !result.ok);
          await refreshConnections();
          return result;
        } finally {
          if (key) {
            setBusy((current) => {
              const next = { ...current };
              delete next[key];
              return next;
            });
          }
        }
      }

      async function toggleConnection(item) {
        await action(
          "setEnabled",
          { key: item.key, enabled: item.enabled === false },
          CONNECTOR_TIMEOUTS.setEnabled,
          t("enableSuccess"),
          item.key,
        );
      }

      async function checkConnection(item) {
        await action(
          "healthCheck",
          item.connectorId ? { connectorId: item.connectorId } : {},
          CONNECTOR_TIMEOUTS.healthCheck,
          t("checkSuccess"),
          item.key,
        );
      }

      async function reconnectConnection(item) {
        await action(
          "reconnect",
          { key: item.key },
          CONNECTOR_TIMEOUTS.reconnect,
          t("reconnectSuccess"),
          item.key,
        );
      }

      async function updateAll() {
        if (!requireConnector()) return;
        setUpdating(true);
        const catalog = await callConnector(
          "refreshCatalog",
          {},
          CONNECTOR_TIMEOUTS.refreshCatalog,
        );
        if (!catalog.ok) {
          setUpdating(false);
          setActionResults((current) => ({
            ...current,
            __all: { ok: false, message: catalog.message || t("actionFailed"), at: Date.now() },
          }));
          notify(catalog.message || t("actionFailed"), true);
          return;
        }
        const health = await callConnector(
          "healthCheck",
          {},
          CONNECTOR_TIMEOUTS.healthCheck,
        );
        setUpdating(false);
        setActionResults((current) => ({
          ...current,
          __all: {
            ok: health.ok,
            message: health.ok ? t("refreshSuccess") : health.message || t("actionFailed"),
            at: Date.now(),
          },
        }));
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
                  isEntryInstalled(selected) &&
                    h(Badge, { tone: "verified" }, t("installedTab")),
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
                isEntryInstalled(selected) ? t("reinstall") : t("installNow"),
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
              h("div", null, h("dt", null, "ID"), h("dd", null, selected.name)),
              h("div", null, h("dt", null, t("sourceOfficial")), h("dd", null, selected.official ? t("sourceOfficial") : t("sourceCommunity"))),
            ),
          ),
          selected.tools.length > 0 &&
            h(
              "div",
              { className: "mc-tools", style: { marginTop: 14 } },
              h(
                "details",
                null,
                h("summary", null, `${t("toolList")} (${selected.tools.length})`),
                h(
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
        const overallFeedback = actionResults.__all;
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
                    action(
                      "healthCheck",
                      {},
                      CONNECTOR_TIMEOUTS.healthCheck,
                      t("checkSuccess"),
                    ),
                  disabled: !available,
                },
                t("checkAll"),
              ),
              h(
                "button",
                {
                  type: "button",
                  className: "mc-secondary",
                  onClick: openBackup,
                  disabled: !available,
                },
                t("backupTitle"),
              ),
            ),
          ),
          overallFeedback &&
            h(
              "div",
              {
                className: `mc-action-feedback ${
                  overallFeedback.pending
                    ? "pending"
                    : overallFeedback.ok
                      ? "ok"
                      : "bad"
                }`,
              },
              overallFeedback.pending ? t("checking") : overallFeedback.message,
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
                      const referenceEntry = findMarketEntryForConnection(item);
                      const feedback = actionResults[item.key];
                      const feedbackMessage = feedback?.pending
                        ? t("checking")
                        : feedback?.message ||
                          (item.toolsAvailable
                            ? `${t("toolsFound")} ${item.cachedToolCount} ${t("tools")}`
                            : item.diagnostic?.message ||
                              item.healthMessage ||
                              item.lastError ||
                              t("stateHint"));
                      const feedbackTone = feedback?.pending
                        ? "pending"
                        : feedback
                          ? feedback.ok
                            ? "ok"
                            : "bad"
                          : "muted";
                      return h(
                        "article",
                        { className: "mc-installed-row", key: item.key || `${displayName}:${index}` },
                        h(
                          "div",
                          { className: "mc-installed-copy" },
                          h(
                            "div",
                            { className: "mc-installed-name" },
                            h(EntryIcon, {
                              entry:
                                referenceEntry ?? {
                                  name: displayName,
                                  display_name: displayName,
                                },
                            }),
                            h("span", null, displayName),
                          ),
                          h("div", { className: "mc-installed-key" }, item.key || ""),
                          h(
                            "div",
                            {
                              className: `mc-installed-status ${feedbackTone}`,
                              title: feedbackMessage,
                            },
                            feedbackMessage,
                          ),
                          item.cachedToolCount > 0 &&
                            h(
                              "button",
                              {
                                type: "button",
                                className: "mc-tool-toggle",
                                onClick: () =>
                                  setExpandedTools((current) => ({
                                    ...current,
                                    [item.key]: !current[item.key],
                                  })),
                              },
                              expandedTools[item.key]
                                ? t("hideTools")
                                : t("viewTools"),
                              ` (${item.cachedToolCount})`,
                            ),
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
                              disabled: Boolean(busy[item.key]),
                              onClick: () => toggleConnection(item),
                            },
                            enabled ? t("disable") : t("enable"),
                          ),
                          h(
                            "button",
                            {
                              type: "button",
                              className: "mc-secondary",
                              disabled: Boolean(busy[item.key]),
                              title: t("injectionChanged"),
                              onClick: () => changeInjection(item),
                            },
                            item.injectionMode === "session"
                              ? t("sessionMode")
                              : t("alwaysMode"),
                          ),
                          h(
                            "button",
                            {
                              type: "button",
                              className: "mc-secondary",
                              disabled: Boolean(busy[item.key]),
                              onClick: () => checkConnection(item),
                            },
                            t("check"),
                          ),
                          h(
                            "button",
                            {
                              type: "button",
                              className: "mc-secondary",
                              disabled: Boolean(busy[item.key]),
                              onClick: () => reconnectConnection(item),
                            },
                            t("reconnect"),
                          ),
                          h(
                            "button",
                            {
                              type: "button",
                              className: "mc-secondary",
                              disabled:
                                item.canEditConfiguration === false ||
                                Boolean(busy[item.key]),
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
                              className: "mc-secondary",
                              disabled:
                                item.canRename === false || Boolean(busy[item.key]),
                              onClick: () => openRename(item),
                            },
                            t("rename"),
                          ),
                          h(
                            "button",
                            {
                              type: "button",
                              className: "mc-secondary danger",
                              disabled: Boolean(busy[item.key]),
                              onClick: () => openUninstall(item),
                            },
                            t("uninstall"),
                          ),
                        ),
                        expandedTools[item.key] &&
                          h(
                            "div",
                            { className: "mc-installed-tools" },
                            (item.cachedTools ?? []).length === 0
                              ? h("p", { className: "mc-form-note" }, t("noTools"))
                              : (item.cachedTools ?? []).slice(0, 80).map((tool) =>
                                  h(
                                    "div",
                                    { className: "mc-installed-tool", key: tool.name },
                                    h("code", null, tool.name),
                                    h("span", null, tool.description || ""),
                                  ),
                                ),
                          ),
                      );
                    }),
                  ),
        );
      };

      const renderModal = () => {
        if (!modal) return null;
        const isInstall = modal.kind === "install";
        const isConfirm = modal.kind === "confirm";
        const isRename = modal.kind === "rename";
        const isBackup = modal.kind === "backup";
        const credentialSummary =
          modal.kind === "edit" ? parseConnectionEditorSummary(modal.json ?? "") : null;
        const updateValue = (key, value) =>
          setModal((current) =>
            current
              ? { ...current, values: { ...(current.values ?? {}), [key]: value } }
              : current,
          );
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
                isInstall
                  ? t("installNativeHint")
                  : isConfirm
                    ? modal.message
                    : isBackup
                      ? t("backupNote")
                      : isRename
                        ? t("renameHint")
                        : t("editHint"),
              ),
            ),
            h(
              "div",
              { className: "mc-modal-body" },
              isBackup &&
                h(
                  "div",
                  { className: "mc-backup" },
                  modal.loading
                    ? h("p", { className: "mc-loading" }, t("loading"))
                    : h(
                        "div",
                        null,
                        h(
                          "div",
                          { className: "mc-backup-actions" },
                          h(
                            "button",
                            {
                              type: "button",
                              className: "mc-secondary",
                              onClick: () => copy(modal.exported || "", "backup", t),
                            },
                            copied === "backup" ? t("backupCopied") : t("copy"),
                          ),
                          h(
                            "button",
                            {
                              type: "button",
                              className: "mc-secondary",
                              onClick: downloadBackup,
                            },
                            t("download"),
                          ),
                          h(
                            "button",
                            {
                              type: "button",
                              className: "mc-secondary",
                              disabled: modalBusy,
                              onClick: createBackup,
                            },
                            modalBusy ? t("saving") : t("createSnapshot"),
                          ),
                        ),
                        h("textarea", {
                          className: "mc-textarea",
                          readOnly: true,
                          spellCheck: false,
                          value: modal.exported || "",
                        }),
                        h("h4", { className: "mc-section-title" }, t("backupTitle")),
                        (modal.snapshots ?? []).length === 0
                          ? h("p", { className: "mc-form-note" }, t("noSnapshots"))
                          : h(
                              "div",
                              { className: "mc-snapshot-list" },
                              (modal.snapshots ?? []).map((snapshot) =>
                                h(
                                  "div",
                                  { className: "mc-snapshot-row", key: snapshot.id },
                                  h(
                                    "div",
                                    { className: "mc-snapshot-copy" },
                                    h(
                                      "strong",
                                      null,
                                      `${snapshot.reason || t("snapshotReason")} · ${new Date(snapshot.createdAt).toLocaleString()}`,
                                    ),
                                    h(
                                      "span",
                                      null,
                                      `${snapshot.existingCount ?? 0} 条连接${
                                        snapshot.absentCount
                                          ? ` · 可移除 ${snapshot.absentCount} 条`
                                          : ""
                                      }${snapshot.restorable ? "" : ` · ${t("notRestorable")}`}`,
                                    ),
                                  ),
                                  h(
                                    "button",
                                    {
                                      type: "button",
                                      className: "mc-secondary",
                                      disabled: modalBusy || snapshot.restorable === false,
                                      onClick: () => restoreBackup(snapshot.id),
                                    },
                                    modalBusy ? t("restoring") : t("restoreSnapshot"),
                                  ),
                                ),
                              ),
                            ),
                      ),
                ),
              isInstall &&
                h(
                  "div",
                  { className: "mc-form" },
                  h(
                    "div",
                    { className: "mc-transport-line" },
                    h("span", null, t("transport")),
                    h("code", null, transportLabel(t, modal.entry?.transport?.type)),
                    h("span", null, "·"),
                    h(
                      "code",
                      { title: modal.entry?.transport?.url || "" },
                      modal.entry?.transport?.type === "stdio"
                        ? `${modal.entry?.transport?.command || ""} ${(modal.entry?.transport?.args ?? []).join(" ")}`
                        : modal.entry?.transport?.url || "",
                    ),
                  ),
                  (modal.entry?.credentials ?? []).map((credential) => {
                    const key = credentialFieldKey(credential);
                    return h(
                      "label",
                      { className: "mc-field", key },
                      h(
                        "span",
                        { className: "mc-field-head" },
                        h("span", null, credential.name),
                        credential.required && h("b", { className: "mc-required-mark" }, " *"),
                        h(
                          "small",
                          null,
                          credential.kind,
                          credential.required ? "" : ` · ${t("optional")}`,
                        ),
                      ),
                      h("input", {
                        className: "mc-input",
                        type: credential.secret ? "password" : "text",
                        autoComplete: "off",
                        spellCheck: false,
                        placeholder: credential.placeholder || "",
                        value: modal.values?.[key] ?? "",
                        onChange: (event) => updateValue(key, event.target.value),
                      }),
                      h(
                        "span",
                        { className: "mc-field-help" },
                        credential.description || "",
                        credential.obtain_at &&
                          h(
                            "a",
                            {
                              href: credential.obtain_at,
                              target: "_blank",
                              rel: "noreferrer",
                            },
                            ` ${t("apply")} ↗`,
                          ),
                      ),
                    );
                  }),
                  modal.entry?.transport?.type === "stdio" &&
                    h(
                      "label",
                      { className: "mc-field" },
                      h(
                        "span",
                        { className: "mc-field-head" },
                        h("span", null, t("argsLabel")),
                      ),
                      h("textarea", {
                        className: "mc-textarea mc-args",
                        spellCheck: false,
                        value: modal.argsText ?? "",
                        onChange: (event) =>
                          setModal((current) =>
                            current ? { ...current, argsText: event.target.value } : current,
                          ),
                      }),
                      h("span", { className: "mc-field-help" }, t("argsHint")),
                    ),
                  modal.entry?.transport?.type === "stdio" &&
                    h(
                      "label",
                      { className: "mc-field" },
                      h(
                        "span",
                        { className: "mc-field-head" },
                        h("span", null, t("cwdLabel")),
                      ),
                      h("input", {
                        className: "mc-input",
                        type: "text",
                        spellCheck: false,
                        value: modal.cwd ?? "",
                        placeholder: "/path/to/project",
                        onChange: (event) =>
                          setModal((current) =>
                            current ? { ...current, cwd: event.target.value } : current,
                          ),
                      }),
                    ),
                  !(modal.entry?.credentials ?? []).length &&
                    modal.entry?.transport?.type !== "stdio" &&
                    h("p", { className: "mc-form-note" }, t("noRequired")),
                ),
              isRename &&
                h(
                  "label",
                  { className: "mc-field" },
                  h(
                    "span",
                    { className: "mc-field-head" },
                    h("span", null, t("renameTitle")),
                  ),
                  h("input", {
                    className: "mc-input",
                    type: "text",
                    autoComplete: "off",
                    spellCheck: false,
                    value: modal.name ?? "",
                    onChange: (event) =>
                      setModal((current) =>
                        current ? { ...current, name: event.target.value } : current,
                      ),
                  }),
                ),
              !isInstall &&
                !isConfirm &&
                !isRename &&
                h("textarea", {
                  className: "mc-textarea",
                  value: modal.json ?? "",
                  spellCheck: false,
                  onChange: (event) =>
                    setModal((current) =>
                      current ? { ...current, json: event.target.value } : current,
                    ),
                }),
              modal.kind === "edit" &&
                h(
                  "div",
                  { className: "mc-credential-toolbar" },
                  h(
                    "button",
                    {
                      type: "button",
                      className: "mc-secondary",
                      onClick: () =>
                        setModal((current) =>
                          current
                            ? { ...current, showCredentials: !current.showCredentials }
                            : current,
                        ),
                    },
                    modal.showCredentials
                      ? t("hideCredentialDetails")
                      : t("credentialDetails"),
                  ),
                ),
              modal.kind === "edit" &&
                modal.showCredentials &&
                h(
                  "div",
                  { className: "mc-credential-panel" },
                  modal.credentialCopy?.fields?.length
                    ? h(
                        "div",
                        null,
                        h(
                          "div",
                          { className: "mc-credential-panel-head" },
                          h("p", { className: "mc-credential-note" }, t("credentialCopyNote")),
                          h(
                            "button",
                            {
                              type: "button",
                              className: "mc-secondary",
                              onClick: () =>
                                setModal((current) =>
                                  current
                                    ? { ...current, showSecrets: !current.showSecrets }
                                    : current,
                                ),
                            },
                            modal.showSecrets
                              ? t("hidePlaintext")
                              : t("showPlaintext"),
                          ),
                        ),
                        h(
                          "div",
                          { className: "mc-credential-list" },
                          modal.credentialCopy.fields.map((field) =>
                            h(
                              "div",
                              { className: "mc-credential-row", key: field.key },
                              h("span", null, `${field.kind || "Field"} · ${field.label}`),
                              h(
                                "code",
                                { title: field.secret ? undefined : field.value },
                                field.secret && !modal.showSecrets
                                  ? "••••••"
                                  : field.value,
                              ),
                            ),
                          ),
                        ),
                      )
                    : h(
                        "p",
                        { className: "mc-credential-note" },
                        modal.copyEntry
                          ? t("credentialCopyMissing")
                          : t("credentialMasked"),
                      ),
                  modal.copyEntry &&
                    h(
                      "div",
                      { className: "mc-credential-copy-form" },
                      h(
                        "div",
                        { className: "mc-credential-panel-head" },
                        h(
                          "p",
                          { className: "mc-credential-note" },
                          t("credentialCopyFormHint"),
                        ),
                        h(
                          "button",
                          {
                            type: "button",
                            className: "mc-secondary",
                            disabled: modalBusy,
                            onClick: saveCopyFromModal,
                          },
                          modalBusy ? t("saving") : t("saveCredentialCopy"),
                        ),
                      ),
                      modal.copyEntry.credentials.map((credential) => {
                        const fieldKey = credentialFieldKey(credential);
                        return h(
                          "label",
                          { className: "mc-field", key: `copy:${fieldKey}` },
                          h(
                            "span",
                            { className: "mc-field-head" },
                            h("span", null, credential.name),
                            credential.required && h("b", { className: "mc-required-mark" }, " *"),
                            h("small", null, credential.kind),
                          ),
                          h("input", {
                            className: "mc-input",
                            type: credential.secret ? "password" : "text",
                            autoComplete: "off",
                            spellCheck: false,
                            placeholder: credential.placeholder || "",
                            value: modal.copyValues?.[fieldKey] ?? "",
                            onChange: (event) =>
                              setModal((current) =>
                                current
                                  ? {
                                      ...current,
                                      copyValues: {
                                        ...(current.copyValues ?? {}),
                                        [fieldKey]: event.target.value,
                                      },
                                    }
                                  : current,
                              ),
                          }),
                        );
                      }),
                    ),
                  !modal.copyEntry &&
                    credentialSummary &&
                    h(
                      "div",
                      { className: "mc-credential-list" },
                      h(
                        "div",
                        { className: "mc-credential-row", key: "auth-mode" },
                        h("span", null, t("authMode")),
                        h("code", null, credentialSummary.authMode),
                      ),
                      credentialSummary.url &&
                        h(
                          "div",
                          { className: "mc-credential-row", key: "url" },
                          h("span", null, "URL"),
                          h(
                            "code",
                            { title: credentialSummary.url.value },
                            credentialSummary.url.hidden
                              ? credentialSummary.url.value ||
                                  (modal.itemUrl
                                    ? maskConnectionUrl(modal.itemUrl)
                                    : t("credentialUrlHidden"))
                              : credentialSummary.url.value,
                          ),
                        ),
                      credentialSummary.headers.map((header) =>
                        h(
                          "div",
                          { className: "mc-credential-row", key: `header:${header.name}` },
                          h("span", null, `${t("headerLabel")} · ${header.name}`),
                          h("code", null, header.value),
                        ),
                      ),
                      credentialSummary.env.map((entry) =>
                        h(
                          "div",
                          { className: "mc-credential-row", key: `env:${entry.name}` },
                          h("span", null, `${t("envLabel")} · ${entry.name}`),
                          h("code", null, entry.value),
                        ),
                      ),
                      credentialSummary.bearerToken &&
                        h(
                          "div",
                          { className: "mc-credential-row", key: "bearer" },
                          h("span", null, t("bearerLabel")),
                          h("code", null, credentialSummary.bearerToken),
                        ),
                      credentialSummary.apiKeyValue &&
                        h(
                          "div",
                          { className: "mc-credential-row", key: "api-key" },
                          h(
                            "span",
                            null,
                            `${t("apiKeyLabel")}${credentialSummary.apiKeyHeader ? ` · ${credentialSummary.apiKeyHeader}` : ""}`,
                          ),
                          h("code", null, credentialSummary.apiKeyValue),
                        ),
                      !credentialSummary.url &&
                        credentialSummary.headers.length === 0 &&
                        credentialSummary.env.length === 0 &&
                        !credentialSummary.bearerToken &&
                        !credentialSummary.apiKeyValue &&
                        h("p", { className: "mc-form-note" }, t("credentialNone")),
                    ),
                ),
              modal.error && h("p", { className: "mc-form-error" }, modal.error),
            ),
            h(
              "div",
              { className: "mc-modal-actions" },
              isBackup
                ? h(
                    "button",
                    {
                      type: "button",
                      className: "mc-primary",
                      onClick: () => setModal(null),
                    },
                    t("close"),
                  )
                : [
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
                        className: isConfirm ? "mc-secondary danger" : "mc-primary",
                        disabled: modalBusy,
                        onClick: submitModal,
                      },
                      modalBusy
                        ? isInstall
                          ? t("installing")
                          : isConfirm
                            ? t("uninstalling")
                            : isRename
                              ? t("renaming")
                              : t("saving")
                        : isInstall
                          ? t("installNow")
                          : isConfirm
                            ? t("uninstall")
                            : isRename
                              ? t("rename")
                              : t("save"),
                    ),
                  ],
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
                      isEntryInstalled(entry) && h(Badge, { tone: "verified" }, t("installedTab")),
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
