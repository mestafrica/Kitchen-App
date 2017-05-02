let Time  = {
    getToday: () => {
        return new Date();
    },

    getThisYear: () => {
        return this.getToday().getFullYear();
    },

    getThisMonth: () => {
        return this.getToday().getMonth();
    },

    getThisDay: () => {
        return this.getToday().getDate();
    },

    getThisDayOfWeek: () => {
        return this.getToday().getDay();
    }
};

export default Time;
