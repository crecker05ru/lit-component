import { html, fixture, expect } from '@open-wc/testing';

import { LessonCard } from '../src/lesson-card';
import '../src/lesson-card';

describe('LessonCard properties', () => {
    it('has colums', async () => {
        const el: LessonCard = await fixture(html `<lesson-card></lesson-card>`)

        expect(el.colums).to.equal(8)
    })
    it ('has price ', async () => {
        const el: LessonCard = await fixture (html `<lesson-card></lesson-card>`)
        expect(el.price).to.equal(5)
    })
    it ('has lessons count ', async () => {
        const el: LessonCard = await fixture (html `<lesson-card></lesson-card>`)
        expect(el.lessonsCount).to.equal(4)
    })
    it ('has lessons time  ', async () => {
        const el: LessonCard = await fixture (html `<lesson-card></lesson-card>`)
        expect(el.lessonsTime).to.equal(50)
    })
    it ('has rating', async () => {
        const el: LessonCard = await fixture (html `<lesson-card></lesson-card>`)
        expect(el.rating).to.equal(4)
    })
    it ('has rating', async () => {
        const el: LessonCard = await fixture (html `<lesson-card></lesson-card>`)
        expect(el.rating).to.equal(4)
    })
})

describe("LossonCard html" ,() => {
    it ('element accessible', async () => {
        const el: LessonCard = await fixture (html `<lesson-card></lesson-card>`)
        await expect(el).shadowDom.to.be.accessible();
    })
})
describe("LossonCard override attribute" ,() => {
    it ('colums', async () => {
        const el: LessonCard = await fixture (html `<lesson-card colums="5"></lesson-card>`)
        expect(el.colums).to.equal(5);
    })
    it ('lesson count', async () => {
        const el: LessonCard = await fixture (html `<lesson-card lessonsCount="9"></lesson-card>`)
        expect(el.lessonsCount).to.equal(9);
    })
    it ('lesson time', async () => {
        const el: LessonCard = await fixture (html `<lesson-card lessonsTime="170"></lesson-card>`)
        expect(el.lessonsTime).to.equal(170);
    })
    it ('rating', async () => {
        const el: LessonCard = await fixture (html `<lesson-card rating="3"></lesson-card>`)
        expect(el.rating).to.equal(3);
    })
    it ('slot', async () => {
        const el: LessonCard = await fixture (html `<lesson-card >Children elem</lesson-card>`)
        expect(el.innerHTML).to.equal("Children elem");
    })
})