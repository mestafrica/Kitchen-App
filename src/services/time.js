let Time  = {
    getToday: () => {
        return new Date();
    },

    getThisYear: (date) => {
        return date.getFullYear();
    },

    getThisMonth: (date) => {
        return date.getMonth();
    },

    getThisDay: (date) => {
        return date.getDate();
    },

    getThisDayOfWeek: (date) => {
        return date.getDay();
    },

    isSaturday:  (date) => {
        return date.getDay() === 6;
    },

    getServingDate: (date) => {
        let year = Time.getThisYear(date);
        let month = Time.getThisMonth(date);
        let day = Time.getThisDay(date);

        return `${year}-${month + 1}-${day}`
    },

    getDaysTillNextMonday: (date) => {
        return 7 - Time.getThisDayOfWeek(date) + 1;
    },

    getNextMonday: (date) => {
        let year = Time.getThisYear(date);
        let month = Time.getThisMonth(date);
        let day = Time.getThisDay(date);
        let daysTillNextMonday = Time.getDaysTillNextMonday(date);

        return new Date(year, month, day + daysTillNextMonday);
    },

    getNextTuesday: (date) => {
        let year = Time.getThisYear(date);
        let month = Time.getThisMonth(date);
        let day = Time.getThisDay(date);
        let daysTillNextTuesday = Time.getDaysTillNextMonday(date) + 1;

        return new Date(year, month, day + daysTillNextTuesday);
    },

    getNextWednesday: (date) => {
        let year = Time.getThisYear(date);
        let month = Time.getThisMonth(date);
        let day = Time.getThisDay(date);
        let daysTillNextWednesday = Time.getDaysTillNextMonday(date) + 2;

        return new Date(year, month, day + daysTillNextWednesday);

    },

    getNextThursday: (date) => {
        let year = Time.getThisYear(date);
        let month = Time.getThisMonth(date);
        let day = Time.getThisDay(date);
        let daysTillNextThursday = Time.getDaysTillNextMonday(date) + 3;

        return new Date(year, month, day + daysTillNextThursday);

    },

    getNextFriday: (date) => {
        let year = Time.getThisYear(date);
        let month = Time.getThisMonth(date);
        let day = Time.getThisDay(date);
        let daysTillNextFriday = Time.getDaysTillNextMonday(date) + 4;

        return new Date(year, month, day + daysTillNextFriday);

    },

    getNextSaturday: (date) => {
        let year = Time.getThisYear(date);
        let month = Time.getThisMonth(date);
        let day = Time.getThisDay(date);
        let daysTillNextSaturday = Time.getDaysTillNextMonday(date) + 5;

        return new Date(year, month, day + daysTillNextSaturday);

    }
};

export default Time;
