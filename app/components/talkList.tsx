import { Talk } from "@prisma/client";
import { TalkCard } from "~/components/talk-card";
import { Link } from "@remix-run/react";

export interface TalkListProps {
  talks: Talk[];
}

export function TalkList({ talks }: TalkListProps) {
  return (
    <div>
      <h2 className="py-6 text-3xl font-bold">Past and future talks</h2>
      <Link className="p-button" to="./add">
        Add new Talk
      </Link>
      <div className="grid grid-cols-3 gap-5">
        {talks.map((talk) => (
          <TalkCard key={talk.id} talk={talk}></TalkCard>
        ))}
      </div>
    </div>
  );
}