"use client";

import { useEffect, useState } from 'react';

const Calendar = () => {
    const [classSchedule, setClassSchedule] = useState<{ [key: string]: string[] }>({});

    useEffect(() => {
        const calendarElement = document.querySelector('.calendar');
        const prevMonthButton = document.getElementById('prev-month');
        const nextMonthButton = document.getElementById('next-month');
        const classForm = document.getElementById('class-form') as HTMLFormElement;
        const classDateInput = document.getElementById('class-date') as HTMLInputElement;
        const classNameInput = document.getElementById('class-name') as HTMLInputElement;
        const repeatFrequencyInput = document.getElementById('repeat-frequency') as HTMLSelectElement;
        const repeatUntilInput = document.getElementById('repeat-until') as HTMLInputElement;

        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        let currentYear = new Date().getFullYear();
        let currentMonth = new Date().getMonth();

        function createCalendar(year: number, month: number): void {
            if (!calendarElement) return;

            console.log('Creating calendar for', year, month); // Debugging log
            calendarElement.innerHTML = '';

            // Create day headers
            daysOfWeek.forEach(day => {
                const dayElement = document.createElement('div');
                dayElement.className = 'day';
                dayElement.textContent = day;
                calendarElement.appendChild(dayElement);
            });

            // Create dates
            const firstDay = new Date(year, month, 1).getDay();
            const daysInMonth = new Date(year, month + 1, 0).getDate();
            const today = new Date();

            // Fill initial empty days
            for (let i = 0; i < firstDay; i++) {
                const emptyElement = document.createElement('div');
                emptyElement.className = 'date';
                calendarElement.appendChild(emptyElement);
            }

            // Fill days of the month
            for (let i = 1; i <= daysInMonth; i++) {
                const dateElement = document.createElement('div');
                dateElement.className = 'date';
                const dateKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;

                dateElement.textContent = i.toString();

                // Highlight the current date
                if (year === today.getFullYear() && month === today.getMonth() && i === today.getDate()) {
                    dateElement.classList.add('current-date');
                }

                // Highlight dates with classes
                if (classSchedule[dateKey]) {
                    dateElement.classList.add('has-class');
                    dateElement.title = classSchedule[dateKey].join('\n');
                }

                calendarElement.appendChild(dateElement);
            }
        }

        function changeMonth(delta: number) {
            currentMonth += delta;
            if (currentMonth < 0) {
                currentMonth = 11;
                currentYear--;
            } else if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }
            createCalendar(currentYear, currentMonth);
        }

        function addClass(event: Event) {
            event.preventDefault();
            const date = classDateInput.value;
            const className = classNameInput.value.trim();
            const repeatFrequency = repeatFrequencyInput.value;
            const repeatUntil = repeatUntilInput.value;

            if (!date || !className) {
                console.log('Date or Class Name is missing'); // Debugging log
                return;
            }

            const dateList = [date];
            if (repeatUntil && repeatFrequency) {
                let currentDate = new Date(date);
                const endDate = new Date(repeatUntil);

                while (currentDate <= endDate) {
                    if (repeatFrequency === 'daily') {
                        currentDate.setDate(currentDate.getDate() + 1);
                    } else if (repeatFrequency === 'weekly') {
                        currentDate.setDate(currentDate.getDate() + 7);
                    } else if (repeatFrequency === 'monthly') {
                        currentDate.setMonth(currentDate.getMonth() + 1);
                    }

                    if (currentDate <= endDate) {
                        dateList.push(currentDate.toISOString().split('T')[0]);
                    }
                }
            }

            setClassSchedule(prev => {
                const newSchedule = { ...prev };
                dateList.forEach(d => {
                    if (!newSchedule[d]) {
                        newSchedule[d] = [];
                    }
                    newSchedule[d].push(className);
                });
                console.log('Updated Schedule:', newSchedule); // Debugging log
                return newSchedule;
            });

            console.log(`Class added: ${className} on ${date}`); // Debugging log
            createCalendar(currentYear, currentMonth);
            classForm.reset();
        }

        // Add event listeners to buttons and form
        if (prevMonthButton && nextMonthButton) {
            prevMonthButton.addEventListener('click', () => changeMonth(-1));
            nextMonthButton.addEventListener('click', () => changeMonth(1));
        }

        if (classForm) {
            classForm.addEventListener('submit', addClass);
        }

        // Display the current month initially
        createCalendar(currentYear, currentMonth);
    }, [classSchedule]); // Recreate calendar whenever the class schedule changes

    return (
        <div>
            <div className="nav-buttons">
                <button id="prev-month">Previous Month</button>
                <button id="next-month">Next Month</button>
            </div>
            <div id="calendar" className="calendar-container">
                <div className="calendar"></div>
            </div>
            <div className="class-schedule">
                <h2>Add Class Schedule</h2>
                <form id="class-form">
                    <label htmlFor="class-date">Date:</label>
                    <input type="date" id="class-date" required />
                    <label htmlFor="class-name">Class Name:</label>
                    <input type="text" id="class-name" required />
                    <label htmlFor="repeat-frequency">Repeat:</label>
                    <select id="repeat-frequency">
                        <option value="">None</option>
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                    </select>
                    <label htmlFor="repeat-until">Repeat Until:</label>
                    <input type="date" id="repeat-until" />
                    <button type="submit">Add Class</button>
                </form>
            </div>
        </div>
    );
};

export default Calendar;