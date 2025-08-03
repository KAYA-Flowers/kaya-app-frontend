<template>
    <div class="kaya_content__form-index kaya_bg_tiny-logo">
        <OrderFormBox v-if="currentPage === 1" @forward="saveStepOne" @back="this.$router.back()">
            <template #headline>{{ $t(steps[0].title) }}</template>
            <template #description>{{ $t(steps[0].description) }}</template>
            <template #input>
                <div class="kaya_content__form-index__container button-choice">
                    <div class="kaya_content__form-index__container__item"
                         :class="{'selected': steps[0].value === answer.id}"
                         v-for="answer in steps[0].answers"
                         :key="answer.id"
                         @click="setStepOneAnswer(answer.id)"
                    >
                        {{ $t(answer.title)}}
                    </div>
                </div>
            </template>
        </OrderFormBox>
        <OrderFormBox v-if="currentPage === 2" @forward="saveStepTwo" @back="currentPage--">
            <template #headline>{{ $t(steps[1].title) }}</template>
            <template #description>{{ $t(steps[1].description) }}</template>
            <template #input>
                <div class="kaya_content__form-index__container button-choice">
                    <div class="kaya_content__form-index__container__item"
                         :class="{'selected': steps[1].value === answer.id}"
                         v-for="answer in steps[1].answers"
                         :key="answer.id"
                         @click="setStepTwoAnswer(answer.id)"
                    >
                        {{ $t(answer.title)}}
                    </div>
                </div>
            </template>
        </OrderFormBox>
        <OrderFormBox v-if="currentPage === 3" @back="currentPage--">
            <template #headline>{{ $t(steps[2].title) }}</template>
            <template #description>
                {{ $t("order.formular.orderFormular.stepThree.descriptionOne")}}
                Eine Fernbehandlung ist nicht in jedem Fall möglich, sondern nur unter den Voraussetzungen, dass bei Einhaltung anerkannter fachlicher Standards im Sinne des § 630a BGB (nach dem jeweiligen Stand der naturwissenschaftlichen Erkenntnisse, der ärztlichen Erfahrung, der zu Erreichung des ärztlichen Behandlungsziels erforderlich ist und sich in der Erprobung bewährt hat) je nach Krankheitsbild kein persönlicher Kontakt zwischen Arzt und Patient erforderlich ist.


                Alle Fragen werden durch mich nach bestem Wissen und Gewissen wahrheitsgemäß beantwortet. Ich verstehe, dass falsche Informationen für mich gesundheitsschädlich sein können und ggf. auch strafbar sind. Die Diagnose und Behandlungen sind nur für meinen persönlichen Gebrauch bestimmt.

                Mir ist bewusst, dass es sich hierbei um eine privatärztliche Leistung handelt. Die ärztlichen Leistungen werden nach der aktuell gültigen Gebührenordnung für Ärzte (GoÄ) berechnet.

                Ich bin damit einverstanden, dass mir die Arztrechnung so wie ggf. der Arztbrief per   E-Mail-Versand zugestellt wird.

                Mir ist bewusst, dass ich keinen Anspruch darauf habe, dass die von mir vorgeschlagenen Sorten von den Kooperationsärzten verschrieben werden, da die Therapie- und Arzneientscheidung einzig und allein dem Arzt obliegt, der auch allein bestimmt, ob und welche Cannabissorte, THC-Konzentration und Menge im Einzelfall am besten geeignet ist.

                Ich bin damit einverstanden, dass meine Angaben, insbesondere Name, Anschrift, Geburtsdatum, Behandlungsdaten und Behandlungsverläufe, zum Zwecke der Behandlung sowie Abrechnung, an die kooperierenden Ärzte weitergegeben werden, sowie, dass Gesundheitsdaten, die ich mit einem Arzt und/oder einer Apotheke in Hinsicht auf eine angeforderte Behandlung teile, von nicht-medizinischem Hilfspersonal eingesehen werden dürfen, um mögliche Anfragen zu beantworten. Meine Einwilligung ist widerruflich mit Wirkung für die Zukunft durch den Kundensupport unter support@Kaya.flowers.de


                Ich akzeptiere die Datenschutzerklärung und AGB der Plattform.


                Ich möchte den Kaya.flowers Newsletter erhalten, um immer auf dem neusten Stand zu bleiben. Ich kann meine Anmeldung jederzeit widerrufen.

            </template>
        </OrderFormBox>
    </div>
</template>

<style lang="scss" scoped>
.kaya_content__form-index {
    background: var(--kaya-blue-normal);
    height: 100vh;
    width: 100vw;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    &__container {
        &.button-choice {
            display: flex;
            flex-direction: column;
            row-gap: .5rem;
            align-items: center;
            align-content: stretch;
            .kaya_content__form-index__container__item {
                align-self: stretch;
                padding: .5rem 1rem;
                background: var(--kaya-red-normal);
                border: 2px solid var(--kaya-yellow-normal);
                border-radius: 1rem;
                cursor: pointer;
                font-family: 'Alumni Sans', sans-serif;
                font-size: 1.5rem;
                font-weight: 400;
                color: var(--kaya-text-color);
                text-align: center;
                transition: border .3s ease;
                &.selected {
                    border: 2px solid #000;
                }
            }
        }
    }
}
</style>

<script>
import {useOrderConfigStore} from "~/stores/order-config.js";

export default {
    name: "OrderFormIndex",
    data() {
        return {
            currentPage: ref(1),
            steps: [
                {
                    title: "order.formular.orderFormular.stepOne.title",
                    description: "order.formular.orderFormular.stepOne.description",
                    value: ref(null),
                    answers: [
                        {
                            id: 1,
                            title: "order.formular.orderFormular.stepOne.answers[0]"
                        },
                        {
                            id: 2,
                            title: "order.formular.orderFormular.stepOne.answers[1]"
                        },
                        {
                            id: 3,
                            title: "order.formular.orderFormular.stepOne.answers[2]"
                        }
                    ]
                },
                {
                    title: "order.formular.orderFormular.stepTwo.title",
                    description: "order.formular.orderFormular.stepTwo.description",
                    value: ref(null),
                    answers: [
                        {
                            id: 1,
                            title: "order.formular.orderFormular.stepTwo.answers[0]"
                        },
                        {
                            id: 2,
                            title: "order.formular.orderFormular.stepTwo.answers[1]"
                        }
                    ]
                },
                {
                    title: "order.formular.orderFormular.stepThree.title",
                    description: "order.formular.orderFormular.stepThree.description",
                }
            ]
        }
    },
    setup() {
        const store = useOrderConfigStore()
        return {
            store
        }
    },
    methods: {
        setStepOneAnswer(id) {
            this.steps[0].value = id;
        },
        saveStepOne() {
            this.store.setMethod(this.steps[0].value)
            this.currentPage = 2;
        },
        setStepTwoAnswer(id) {
            this.steps[1].value = id;
        },
        saveStepTwo() {
            this.store.setStepTwo(this.steps[1].value)
            this.currentPage = 3;
        },
    }
}
</script>
