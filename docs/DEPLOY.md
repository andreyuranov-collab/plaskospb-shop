# Инструкция: загрузка PLASKO SPB на GitHub и Cloudflare Pages

## Коротко

Для этого сайта командная строка не нужна.

Правильная схема:

```text
GitHub Upload файлов → Cloudflare Pages → автоматический деплой
```

Не использовать `wrangler deploy`, `npx wrangler deploy`, Workers Static Assets и Direct Upload как основной путь.

---

## 1. Загрузка файлов на GitHub

1. Распаковать архив сайта.
2. Создать новый репозиторий, например:

```text
plaskospb-shop
```

3. В GitHub открыть репозиторий.
4. Нажать:

```text
Add file → Upload files
```

5. Закинуть **содержимое папки**, а не сам zip и не папку целиком.
6. Проверить, что `index.html` лежит в корне репозитория.

Правильная структура:

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

В этой версии специально нет `package.json`, потому что сайт не требует npm/bun-сборки.

7. Нажать **Commit changes**.

---

## 2. Создание проекта Cloudflare Pages

1. Зайти в Cloudflare.
2. Открыть:

```text
Workers & Pages
```

3. Нажать:

```text
Create application
```

4. Выбрать именно:

```text
Pages
```

5. Далее:

```text
Import an existing Git repository
```

6. Выбрать GitHub-репозиторий `plaskospb-shop`.

---

## 3. Настройки сборки

Указать:

```text
Project name: plaskospb-shop
Production branch: main
Framework preset: None / Static HTML / No framework
Build command: exit 0
Build output directory: .
Root directory: /
```

Если поле `Build command` можно оставить пустым — можно оставить пустым. Если Cloudflare требует команду, поставить:

```text
exit 0
```

Главное: не должно быть команды:

```text
npx wrangler deploy
```

Если есть поле `Deploy command`, его нужно очистить.

---

## 4. Если появилась ошибка с Wrangler

Если в логе есть строка:

```text
Executing user deploy command: npx wrangler deploy
```

значит проект создан/настроен не как обычный Pages-деплой статического сайта.

Что сделать:

1. Открыть Cloudflare → Workers & Pages → проект.
2. Перейти в Settings / Build settings.
3. Удалить команду `npx wrangler deploy`.
4. Поставить:

```text
Build command: exit 0
Build output directory: .
```

5. Запустить Retry deployment.

Если Cloudflare не даёт убрать `wrangler deploy`, проще удалить этот проект и создать заново через:

```text
Create application → Pages → Import an existing Git repository
```

---

## 5. Проверка после деплоя

После успешной публикации Cloudflare даст адрес вида:

```text
https://plaskospb-shop.pages.dev
```

Проверить:

- открывается главная страница;
- работает каталог;
- работают фильтры;
- товары добавляются в корзину;
- заявка формируется;
- мобильная версия не разваливается;
- `/robots.txt` открывается;
- `/sitemap.xml` открывается.

---

## 6. Подключение домена

После проверки тестового адреса:

1. Открыть проект Cloudflare Pages.
2. Перейти в:

```text
Custom domains
```

3. Добавить:

```text
plaskospb.ru
www.plaskospb.ru
```

Если домен обслуживается в Cloudflare, DNS-записи Cloudflare обычно создаёт автоматически.

---

## 7. Дальнейшие обновления сайта

1. Получить новую версию архива.
2. Распаковать.
3. Через GitHub Upload заменить файлы.
4. Нажать Commit changes.
5. Cloudflare Pages автоматически опубликует новую версию.

Командная строка для этого сценария не нужна.
