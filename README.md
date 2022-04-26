## Svelte bottom menu

## Usage

This library is using typescript.

### How to use

The [simplest possible demo](https://svelte.dev/repl/3deb2b7a5b8c45e990e6e3b37005881c?version=3.47.0)

### Installation

```bash
npm i -D svelte-bottom-menu
```

## Usage

```jsx

<script>
  import BottomMenu from "svelte-bottom-menu";
	let active = false;
</script>
<div>
  <button on:click={()=> active = true}>
    active
  </button>
  <BottomMenu bind:active>
    <div class="menu-content">
      <h5>
      Hello world!
      </h5>
    </div>
  </BottomMenu>
</div>
```
