import { Talk } from "@prisma/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { format, parseJSON } from "date-fns";
import { Link } from "@remix-run/react";

export interface TalkCardProps {
  talk: Talk;
}

export function TalkCard({ talk }: TalkCardProps) {
  return (
    <div className="overflow-hidden rounded shadow-lg">
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{talk.name}</div>
        <div className="py-2">
          <p className="py-1 text-gray-900">
            <FontAwesomeIcon icon={faLocationDot} className="pr-2 text-2xl" />
            {format(parseJSON(talk.date), "dd.MM.y")}
          </p>

          <p className="py-1 text-gray-900">
            <FontAwesomeIcon icon={faCalendarCheck} className="pr-2 text-2xl" />
            {talk.event}
          </p>
        </div>
        <p className="text-base text-gray-700">{talk.abstract}</p>
        <div className="flex justify-center gap-8 p-4">
          <Link className="p-button" to={talk.id + "/edit"}>
            Edit
          </Link>
          <Link className="p-button" to={talk.id + "/comment"}>
            Add Comment
          </Link>
        </div>
      </div>
    </div>
  );
}