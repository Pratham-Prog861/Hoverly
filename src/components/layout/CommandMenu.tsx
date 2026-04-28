"use client";

import { Command } from "cmdk";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Dialog } from "radix-ui";

import { hoverlyIcons } from "@/lib/icons";

export default function CommandMenu() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const down = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
    };

    window.addEventListener("keydown", down);
    return () => window.removeEventListener("keydown", down);
  }, []);

  const navigationItems = useMemo(
    () => [
      {
        id: "home",
        label: "Home",
        description: "Go to the landing page",
        onSelect: () => router.push("/"),
      },
      {
        id: "icons",
        label: "Browse icons",
        description: "Open the full icon catalog",
        onSelect: () => router.push("/icons"),
      },
    ],
    [router],
  );

  const iconItems = useMemo(
    () =>
      hoverlyIcons.map((icon) => ({
        id: icon.slug,
        label: icon.name,
        description: icon.description,
        onSelect: () =>
          router.push(`/icons?q=${encodeURIComponent(icon.slug)}`),
      })),
    [router],
  );

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Global search"
      className="fixed left-1/2 top-24 z-50 w-[min(640px,calc(100vw-1.5rem))] -translate-x-1/2 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#101116] shadow-[0_24px_120px_rgba(0,0,0,0.45)]"
    >
      <div className="fixed inset-0 -z-10 bg-black/60 backdrop-blur-sm" />
      <Dialog.Title className="sr-only">Global search</Dialog.Title>

      <div className="flex items-center gap-3 border-b border-white/8 px-4 py-4">
        <Search className="size-4 text-white/45" />
        <Command.Input
          value={search}
          onValueChange={setSearch}
          placeholder="Search icons or jump to a page..."
          className="h-10 w-full bg-transparent text-sm text-white outline-none placeholder:text-white/30"
        />
        <div className="hidden rounded-lg border border-white/10 bg-white/6 px-2 py-1 text-[11px] text-white/45 sm:block">
          esc
        </div>
      </div>

      <Command.List className="max-h-105 overflow-y-auto p-3">
        <Command.Empty className="px-3 py-8 text-center text-sm text-white/45">
          No results found.
        </Command.Empty>

        <Command.Group heading="Navigate" className="mb-2">
          {navigationItems.map((item) => (
            <Command.Item
              key={item.id}
              value={item.label}
              onSelect={() => {
                item.onSelect();
                setOpen(false);
                setSearch("");
              }}
              className="cursor-pointer rounded-xl px-3 py-3 text-white outline-none transition data-[selected=true]:bg-white/8"
            >
              <div>
                <div className="text-sm font-medium">{item.label}</div>
                <div className="text-xs text-white/45">{item.description}</div>
              </div>
            </Command.Item>
          ))}
        </Command.Group>

        <Command.Group heading="Icons">
          {iconItems.map((item) => (
            <Command.Item
              key={item.id}
              value={`${item.label} ${item.id}`}
              onSelect={() => {
                item.onSelect();
                setOpen(false);
                setSearch("");
              }}
              className="cursor-pointer rounded-xl px-3 py-3 text-white outline-none transition data-[selected=true]:bg-white/8"
            >
              <div>
                <div className="text-sm font-medium">{item.label}</div>
                <div className="text-xs text-white/45">{item.description}</div>
              </div>
            </Command.Item>
          ))}
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  );
}
