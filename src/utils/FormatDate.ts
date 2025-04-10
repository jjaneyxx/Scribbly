// ISO to local time
export default function FormatDate(createAt: string) {
  return new Date(createAt).toLocaleString();
}
