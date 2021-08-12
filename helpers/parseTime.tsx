export default function parseTime(time) {
  return `${Number(time.slice(0, 2))} hrs ${time.slice(3)} mins`;
}
