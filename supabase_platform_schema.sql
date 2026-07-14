
-- Classroom Games Platform teacher account database
-- Run this in Supabase SQL Editor.

create table if not exists public.platform_users (
  id text primary key,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  email text not null unique,
  username text,
  password text not null,
  name text,
  role text not null default 'user',
  account_status text not null default 'pending',
  disabled boolean not null default false,
  owned_games jsonb not null default '[]'::jsonb,
  promo_gift jsonb not null default '[]'::jsonb,
  package text not null default 'free',
  profile_completed boolean not null default false,
  profile jsonb not null default '{}'::jsonb,
  raw jsonb not null default '{}'::jsonb
);

create index if not exists platform_users_email_idx on public.platform_users (lower(email));
create index if not exists platform_users_role_idx on public.platform_users (role);
create index if not exists platform_users_status_idx on public.platform_users (account_status);

alter table public.platform_users enable row level security;

grant usage on schema public to service_role;
grant select, insert, update, delete on table public.platform_users to service_role;
grant usage, select on all sequences in schema public to service_role;

alter default privileges in schema public
grant select, insert, update, delete on tables to service_role;

alter default privileges in schema public
grant usage, select on sequences to service_role;
