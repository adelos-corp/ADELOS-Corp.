import React, { useMemo, useState } from "react";

export interface ColumnDef<T> {
  key: keyof T | string;
  header: string;
  sortable?: boolean;
  render?: (value: any, row: T) => React.ReactNode;
}

function getCellValue<T extends Record<string, unknown>>(row: T, key: keyof T | string) {
  if (typeof key === "string" && key in row) {
    return row[key as keyof T];
  }

  return undefined;
}

interface DataTableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  searchKey?: keyof T | string;
  filename?: string;
  onRowClick?: (row: T) => void;
}

export function DataTable<T extends Record<string, unknown>>({
  data,
  columns,
  searchKey,
  filename = "records",
  onRowClick,
}: DataTableProps<T>) {
  const [query, setQuery] = useState("");

  const filteredData = useMemo(() => {
    if (!query) return data;
    const needle = query.toLowerCase();
    return data.filter((row) => {
      const searchValue = searchKey ? String(row[searchKey] ?? "") : "";
      return searchValue.toLowerCase().includes(needle);
    });
  }, [data, query, searchKey]);

  return (
    <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#111111]">
      <div className="flex flex-col gap-3 border-b border-white/10 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-white/60">{filteredData.length} result{filteredData.length === 1 ? "" : "s"}</div>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={`Search ${filename}...`}
          className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-amber-400/60 sm:w-64"
        />
      </div>

      <div className="overflow-auto">
        <table className="min-w-full text-left text-sm text-white/80">
          <thead className="bg-white/5 text-xs uppercase tracking-[0.24em] text-white/40">
            <tr>
              {columns.map((column) => (
                <th key={String(column.key)} className="px-4 py-3 font-medium">
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr
                key={index}
                onClick={() => onRowClick?.(row)}
                className={`border-t border-white/10 transition-colors ${onRowClick ? "cursor-pointer hover:bg-white/5" : ""}`}
              >
                {columns.map((column) => {
                  const value = getCellValue(row, column.key);
                  return (
                    <td key={String(column.key)} className="px-4 py-3">
                      {column.render ? column.render(value, row) : value != null ? String(value) : ""}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
