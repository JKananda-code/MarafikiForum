-- Profiles
create table profiles (
  id uuid references auth.users primary key,
  username text unique,
  avatar_url text,
  membership_tier text default 'free',
  created_at timestamp default now()
);

-- Categories
create table categories (
  id bigint generated always as identity primary key,
  slug text unique,
  name text,
  description text
);

-- Threads
create table threads (
  id bigint generated always as identity primary key,
  category_id bigint references categories,
  author_id uuid references profiles,
  title text,
  slug text,
  is_premium boolean default false,
  created_at timestamp default now()
);

-- Posts
create table posts (
  id bigint generated always as identity primary key,
  thread_id bigint references threads,
  author_id uuid references profiles,
  content text,
  created_at timestamp default now()
);

-- Enable RLS
alter table profiles enable row level security;
alter table threads enable row level security;
alter table posts enable row level security;

create policy "public read threads" on threads for select using (true);
create policy "authors can insert" on threads for insert with check (auth.uid() = author_id);
