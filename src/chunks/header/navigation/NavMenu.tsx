import { buttonVariants } from '@/components/ui/Button.tsx';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { linkedIn } from '@/constants/links.ts';
import { AlignJustify } from 'lucide-react';
import type { ReactNode } from 'react';

const NavLink = ({ children, href }: { children: ReactNode; href: string }) => (
  <a href={href}>
    <DropdownMenuItem>{children}</DropdownMenuItem>
  </a>
);

export default function NavMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="inline-flex lg:hidden">
        <AlignJustify className="h-8 w-8" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="m-2">
        <NavLink href="/#experience">Experience</NavLink>
        <NavLink href="/#projects">Projects</NavLink>
        <NavLink href="/#footer">Contact</NavLink>
        <DropdownMenuSeparator />
        <div className="grid grid-cols-2 gap-4">
          <a
            href="https://drive.google.com/drive/folders/1MaUT8dM9xsGHTTv5EVJ745qTjP9iMaHa?usp=drive_link"
            target="_blank"
            className={buttonVariants({})}
          >
            My up-to-date resume
          </a>
          <a href={linkedIn} className={buttonVariants()} target="_blank">
            Talk with me
          </a>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
