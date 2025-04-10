// ISO to local time
export default function formatDate(createAt: string) {
  return new Date(createAt).toLocaleString();
}
