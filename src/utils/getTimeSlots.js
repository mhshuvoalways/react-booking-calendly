const allAvailability = [
  "12:00AM",
  "12:15AM",
  "12:30AM",
  "12:45AM",
  "1:00AM",
  "1:15AM",
  "1:30AM",
  "1:45AM",
  "2:00AM",
  "2:15AM",
  "2:30AM",
  "2:45AM",
  "3:00AM",
  "3:15AM",
  "3:30AM",
  "3:45AM",
  "4:00AM",
  "4:15AM",
  "4:30AM",
  "4:45AM",
  "5:00AM",
  "5:15AM",
  "5:30AM",
  "5:45AM",
  "6:00AM",
  "6:15AM",
  "6:30AM",
  "6:45AM",
  "7:00AM",
  "7:15AM",
  "7:30AM",
  "7:45AM",
  "8:00AM",
  "8:15AM",
  "8:30AM",
  "8:45AM",
  "9:00AM",
  "9:15AM",
  "9:30AM",
  "9:45AM",
  "10:00AM",
  "10:15AM",
  "10:30AM",
  "10:45AM",
  "11:00AM",
  "11:15AM",
  "11:30AM",
  "11:45AM",
  "12:00PM",
  "12:15PM",
  "12:30PM",
  "12:45PM",
  "1:00PM",
  "1:15PM",
  "1:30PM",
  "1:45PM",
  "2:00PM",
  "2:15PM",
  "2:30PM",
  "2:45PM",
  "3:00PM",
  "3:15PM",
  "3:30PM",
  "3:45PM",
  "4:00PM",
  "4:15PM",
  "4:30PM",
  "4:45PM",
  "5:00PM",
  "5:15PM",
  "5:30PM",
  "5:45PM",
  "6:00PM",
  "6:15PM",
  "6:30PM",
  "6:45PM",
  "7:00PM",
  "7:15PM",
  "7:30PM",
  "7:45PM",
  "8:00PM",
  "8:15PM",
  "8:30PM",
  "8:45PM",
  "9:00PM",
  "9:15PM",
  "9:30PM",
  "9:45PM",
  "10:00PM",
  "10:15PM",
  "10:30PM",
  "10:45PM",
  "11:00PM",
  "11:15PM",
  "11:30PM",
  "11:45PM",
];

function getTimeSlots(timeAvailables, reserveSlots, interval) {
  const timeToMinutes = (time) => {
    const [timePart, modifier] = time.split(/(AM|PM)/);
    let [hours, minutes] = timePart.split(":").map(Number);
    if (modifier === "PM" && hours !== 12) hours += 12;
    if (modifier === "AM" && hours === 12) hours = 0;
    return hours * 60 + minutes;
  };

  const minDuration = interval * 60;

  const busyTimesInMinutes = reserveSlots.map((slot) => ({
    start: timeToMinutes(slot.startingTime),
    end: timeToMinutes(slot.endingTime),
  }));

  const results = [];

  for (const available of timeAvailables) {
    const availableStart = timeToMinutes(available.startingTime);
    const availableEnd = timeToMinutes(available.endingTime);

    let currentSlotStart = availableStart;

    while (currentSlotStart + minDuration <= availableEnd) {
      const nextSlotEnd = currentSlotStart + minDuration;
      let slotAvailable = true;

      for (let busy of busyTimesInMinutes) {
        if (
          (currentSlotStart >= busy.start && currentSlotStart < busy.end) ||
          (nextSlotEnd > busy.start && nextSlotEnd <= busy.end) ||
          (currentSlotStart <= busy.start && nextSlotEnd >= busy.end)
        ) {
          slotAvailable = false;
          currentSlotStart = busy.end;
          break;
        }
      }
      if (slotAvailable && nextSlotEnd <= availableEnd) {
        results.push({
          startingTime:
            allAvailability[
              allAvailability.indexOf(available.startingTime) +
                (currentSlotStart - availableStart) / 15
            ],
          endingTime:
            allAvailability[
              allAvailability.indexOf(available.startingTime) +
                (nextSlotEnd - availableStart) / 15
            ],
        });
        currentSlotStart = nextSlotEnd;
      }
    }
  }

  return results;
}

export default getTimeSlots;
