import type {
  CategoryGroup,
  HistoriaCategory,
  HistoriaEntry,
} from "../../../_data/historia";

/**
 * Flat row produced by `useStudyRows` and consumed by the
 * virtualizer. Each row maps 1:1 to a virtual item in the window
 * virtualizer; the discriminator (`kind`) drives both the
 * estimated size and the rendered component.
 *
 * Every row carries `colorVar` — the accent color of the group it
 * belongs to — so each sub-component (`GroupHeader`,
 * `CategoryHeader`, `EntryCard`) can paint its own colored
 * affordance without looking the group up again.
 */
export type Row =
  | {
      kind: "group";
      groupId: CategoryGroup["id"];
      label: string;
      description: string;
      count: number;
      colorVar: string;
    }
  | {
      kind: "header";
      groupId: CategoryGroup["id"];
      categoryId: HistoriaCategory;
      label: string;
      description: string;
      count: number;
      colorVar: string;
    }
  | {
      kind: "entry";
      groupId: CategoryGroup["id"];
      entry: HistoriaEntry;
      colorVar: string;
    };

/**
 * Initial size estimates handed to `useWindowVirtualizer`. The
 * virtualizer measures each row after first paint via
 * `measureElement`, so these only matter on the very first render.
 */
export const GROUP_ESTIMATE = 120;
export const HEADER_ESTIMATE = 88;
export const ENTRY_ESTIMATE = 220;
