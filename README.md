# PLASKO SPB

Версия: v00.05_test_260707 Shop — статический интернет-магазин-заявка

Тестовая версия сайта для размещения на GitHub и Cloudflare Pages.

## Назначение

Статический интернет-магазин-заявка под домен:

```text
plaskospb.ru
```

Сайт не требует npm, bun, node_modules, сборки или командной строки.

## Структура

```text
index.html
styles.css
script.js
assets/
data/
docs/
_headers
robots.txt
sitemap.xml
README.md
CHANGELOG.md
```

## Деплой

Основной способ:

```text
GitHub Upload → Cloudflare Pages
```

Настройки Cloudflare Pages:

```text
Framework preset: None / Static HTML / No framework
Build command: exit 0
Build output directory: .
Root directory: /
```

Не использовать:

```text
npx wrangler deploy
```

Подробная инструкция — `docs/DEPLOY.md`.

## Перед публикацией заменить

В `script.js` проверить и заменить:

- телефон;
- email;
- цены;
- остатки;
- товары;
- цвета;
- условия доставки и оплаты.

В `index.html` проверить юридические блоки, SEO-тексты и контактные данные.


## Исправление v00.04

Клик по логотипу в хедере возвращает страницу строго в начало. Sticky-header больше не используется как якорь.
