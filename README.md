# PLASKO SPB shop v00.07 test 260707

Тестовая статическая версия интернет-магазина под GitHub + Cloudflare Pages.

Ключевое изменение v00.07: содержательно сохранены правки v00.06, но архив снова упакован с верхней папкой версии `plaskospb_shop_v00_07_test_260707`, чтобы при распаковке сразу появлялась отдельная папка проекта.

## Назначение

Статический интернет-магазин-заявка под домен:

```text
plaskospb.ru
```

Сайт не требует npm, bun, node_modules, сборки или командной строки.

## Структура после распаковки архива

```text
plaskospb_shop_v00_07_test_260707/
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

## Как загружать в GitHub

Для GitHub Upload нужно открыть папку `plaskospb_shop_v00_07_test_260707` и загрузить в репозиторий именно её содержимое, а не саму верхнюю папку.

В корне GitHub-репозитория должны лежать:

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
