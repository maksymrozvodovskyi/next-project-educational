import { getSingleNote } from "@/lib/api";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function NoteDetails({ params }: Props) {
  const { id } = await params;
  const note = await getSingleNote(id);

  const formattedDate = note.updatedAt
    ? `Updated at: ${note.updatedAt}`
    : `Created at: ${note.createdAt}`;

  return (
    <div>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <button>Edit</button>
      <p>{formattedDate}</p>
    </div>
  );
}
