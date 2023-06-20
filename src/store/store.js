import { create } from "zustand";

const useStore = create()((set) => ({
    data: [
        {
            activityKey: "1",
            productDetailing: {
                products: [
                    {
                        id: 1,
                        name: "Product1",
                        pdf: "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                        rank: "",
                    },
                    {
                        id: 2,
                        name: "Product2",
                        pdf: "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                        rank: "",
                    },
                ],
                mdBehaviour: "",
                done: false,
            },
            marketResearch: {
                questions: [
                    {
                        id: 1,
                        question: "Did the doctor report the side effects",
                        answer: "",
                    },
                    {
                        id: 2,
                        question:
                            "Patient feedback regarding our product's efficacy",
                        answer: "",
                    },
                    {
                        id: 3,
                        question:
                            "Patient feedback regarding our product's price",
                        answer: "",
                    },
                    {
                        id: 4,
                        question:
                            "Thoughts on product's effectiveness compared to competitors",
                        answer: "",
                    },
                ],
                mdBehaviour: "",
                done: false,
            },
            productSamples: {
                samples: [
                    {
                        id: 1,
                        name: "Sample1",
                        quantity: "",
                    },
                    {
                        id: 2,
                        name: "Sample2",
                        quantity: "",
                    },
                ],
                mdBehaviour: "",
                done: false,
            },
        },
    ],
    updateData: (data) => set(() => ({ data: data })),
    updateQuestion: (answer, id, activityId) =>
        set(() => ({
            data: [
                ...useStore.getState().data.map((activity) => {
                    if (activity.activityKey == activityId) {
                        return {
                            ...activity,
                            marketResearch: {
                                ...activity.marketResearch,
                                questions:
                                    activity.marketResearch.questions.map(
                                        (question) => {
                                            if (question.id == id) {
                                                return {
                                                    ...question,
                                                    answer: answer,
                                                };
                                            } else {
                                                return question;
                                            }
                                        }
                                    ),
                                done: true,
                            },
                        };
                    } else {
                        return activity;
                    }
                }),
            ],
        })),

    updateQuantity: (quantity, id, activityId) =>
        set(() => ({
            data: [
                ...useStore.getState().data.map((activity) => {
                    if (activity.activityKey == activityId) {
                        return {
                            ...activity,
                            productSamples: {
                                ...activity.productSamples,
                                samples: activity.productSamples.samples.map(
                                    (sample) => {
                                        if (sample.id == id) {
                                            return {
                                                ...sample,
                                                quantity: quantity,
                                            };
                                        } else {
                                            return sample;
                                        }
                                    }
                                ),
                                done: true,
                            },
                        };
                    } else {
                        return activity;
                    }
                }),
            ],
        })),
}));

export default useStore;
