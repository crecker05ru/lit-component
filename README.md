# lit-component
Для разворачивания компонента следуете следующим шагам:

1. Склонируйте репозиторий 
git clone https://github.com/crecker05ru/lit-component.git
2. Установите зависимости 
npm ci
3. Запустите сервер
npm run start
4. Запустите скрипт 
npm run dev
5. Запуск тестирования
npm run test

Использование Lit компонента LessonCard.
Компонента принимает атриббуты:
1. colums: number - размер компоненты в колоннах.По умолчанию значение 8 из 16 возможных.
2. price: number - размер цены урока.По умолчанию 700.
3. lessonsCount: number - количество уроков.По умолчанию 4.
4. lessonsTime: number - количество времени.По умолчанию 60.
5. rating: number - рейтинг урока.По умолчанию 5.

Элемент <lesson-card></lesson-card> может принимать children елемент.
