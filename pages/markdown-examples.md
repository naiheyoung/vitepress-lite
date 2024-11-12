# Markdown Syntax

## Title-2

### Title-3

#### Title-4

##### Title-5

> In this example, the directory depth will only go to 4, you can change this in `theme.config.ts` - `outline.level`

## CodeBlock

> `VitePress` integrates the [Shiki](https://shiki.style/) highlighting library by default. <br/>You can directly append a valid language alias to the beginning of the code block.

### Highlight

**Input**

````md
```ts{3}
function generate() {

}
```

```ts{2,4,6}
function print() {
  console.log('I told my wife she was drawing her eyebrows too high. She looked surprised.')
  console.log('Why did the scarecrow win an award? Because he was outstanding in his field.')
  console.log('Did you hear about the Italian chef that died? He pasta way.')
  console.log('I used to play piano by ear, but now I use my hands.')
  console.log('Why can’t you give Elsa a balloon? Because she’ll let it go.')
  console.log('What’s orange and sounds like a parrot? A carrot.')
}
```

```ts{3-5}
function emoji() {
  console.log(🐀)
  console.log(🐂)
  console.log(🐅)
  console.log(🐇)
  console.log(🐉)
}
```
````

**Output**

```ts{3}
function generate() {

}
```

```ts{2,4,6}
function print() {
  console.log('I told my wife she was drawing her eyebrows too high. She looked surprised.')
  console.log('Why did the scarecrow win an award? Because he was outstanding in his field.')
  console.log('Did you hear about the Italian chef that died? He pasta way.')
  console.log('I used to play piano by ear, but now I use my hands.')
  console.log('Why can’t you give Elsa a balloon? Because she’ll let it go.')
  console.log('What’s orange and sounds like a parrot? A carrot.')
}
```

```ts{3-5}
function emoji() {
  console.log(🐀)
  console.log(🐂)
  console.log(🐅)
  console.log(🐇)
  console.log(🐉)
}
```

### Focus

> Display target code to obscure other codes

**Input**

````md
```ts
import { ref } from 'vue'

const str = ref('hello, world!') // [❗code focus]
console.log(str.value) // [❗code focus]
```
````

**Output**

```ts
import { ref } from 'vue'

const str = ref('hello, world!') // [!code focus]
console.log(str.value) // [!code focus]
```

### Import Code Snippets

> You can import existing code snippets.

**Input**

```md
<<< @/<code_snippet_file>[#snippetID]{highlightLines}
<<< @/theme.config.ts#nav{5}
```

**Output**

<<< @/theme.config.ts#nav{5}

> You can use `#region <ID>` and `#endregion <ID>` to mark a reference region.

### Diff

> Compare files like `git`

**Input**

````md
```ts
type Diff<T> = {
  [K in keyof T]?: T[K] // [❗code --]
  [K in keyof T]?: T[K] extends object ? Diff<T[K]> : T[K] // [❗code ++]
}

function diff() {
  const result: Partial<T> = {}

  const compare = (key: keyof T, val1: any, val2: any): void => { // [❗code --]
  for (const key of new Set([...Object.keys(obj1), ...Object.keys(obj2)])) { // [❗code ++]
    const val1 = obj1[key]
    const val2 = obj2[key]

    if (val1 && val2 && typeof val1 === 'object' && typeof val2 === 'object') {
      const nestedDiff = diff(val1, val2)
      if (Object.keys(nestedDiff).length > 0) {
        result[key] = nestedDiff
      }
    } else if (val1 !== val2) {
      result[key] = val2 !== undefined ? val2 : val1
    }
  }

  return result as Diff<T> // [❗code --]
  return result // [❗code ++]
}
```
````

**Output**

```ts
type Diff<T> = {
  [K in keyof T]?: T[K] // [!code --]
  [K in keyof T]?: T[K] extends object ? Diff<T[K]> : T[K] // [!code ++]
}

function diff() {
  const result: Partial<T> = {}

  const compare = (key: keyof T, val1: any, val2: any): void => { // [!code --]
  for (const key of new Set([...Object.keys(obj1), ...Object.keys(obj2)])) { // [!code ++]
    const val1 = obj1[key]
    const val2 = obj2[key]

    if (val1 && val2 && typeof val1 === 'object' && typeof val2 === 'object') {
      const nestedDiff = diff(val1, val2)
      if (Object.keys(nestedDiff).length > 0) {
        result[key] = nestedDiff
      }
    } else if (val1 !== val2) {
      result[key] = val2 !== undefined ? val2 : val1
    }
  }

  return result as Diff<T> // [!code --]
  return result // [!code ++]
}
```

### Highlight Block

**Input**

```md
::: info
This is a highlighted message
:::

> [!NOTE]
> This is a highlighted message
```

**Output**

::: info
This is a highlighted message
:::

> [!NOTE]
> This is a highlighted message

## For more tips, see the [official documentation](https://vitepress.dev/zh/guide/markdown)
