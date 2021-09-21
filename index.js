/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
    var time = new Date(date);
    time.setMinutes(time.getUTCMinutes());
    var period = ['years', 'months', 'days', 'hours', 'minutes']
   
    newObj = {
         add: function(val, str) {
            if (val < 0) {
                throw new TypeError('Передано неверное значение val = ' + val);
            }
            if (!period.includes(str))
                throw new TypeError('Передано неверное значение str = ' + (str));
            if (str === 'years') {
                    time.setUTCFullYear(time.getUTCFullYear() + val);
            }
            if (str === 'months') {
                time.setUTCMonth(time.getUTCMonth() + val);
            }
                if (str === 'days') {
                    time.setUTCDate(time.getUTCDate() + val);
            }
            if (str === 'hours') {
                time.setUTCHours(time.getUTCHours() + val + 3);
            }
            if (str === 'minutes') {
                time.setUTCMinutes(time.getUTCMinutes() + val);
            }
            return this;
        },
        subtract: function(val, str) {
            if (val < 0) {
                throw new TypeError('Передано неверное значение val = ' + val);
            }
            if (!period.includes(str))
                throw new TypeError('Передано неверное значение str = ' + str);
            if (str === 'years') {
                    time.setUTCFullYear(time.getUTCFullYear() - val);
            }
            if (str === 'months') {
                time.setUTCMonth(time.getUTCMonth() - val);
            }
                if (str === 'days') {
                    time.setUTCDate(time.getUTCDate() - val);
            }
            if (str === 'hours') {
                time.setUTCHours(time.getUTCHours() - val + 3);
            }
            if (str === 'minutes') {
                time.setUTCMinutes(time.getUTCMinutes() - val);
            }
            return this;
        },
        get value() {
            return time.toISOString().slice(0, 16).replace('T', ' ');
        }
    }   
return newObj;
}