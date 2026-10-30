export type TransportType = "stdio" | "streamable_http" | "sse";

export interface TransportVariable {
  description: string;
  obtain_at?: string;
  required?: boolean;
  secret?: boolean;
}

export interface Transport {
  type: TransportType;
  command?: string;
  args?: string[];
  env?: Array<{
    name: string;
    description?: string;
    obtain_at?: string;
    required?: boolean;
    secret?: boolean;
  }>;
  url?: string;
  headers?: Array<{
    name: string;
    description: string;
    obtain_at?: string;
    required?: boolean;
    secret?: boolean;
  }>;
  variables?: Record<string, TransportVariable>;
}

export interface ToolInfo {
  name: string;
  description: string;
  side_effect?: boolean;
}

export interface InstallConfig {
  id: string;
  label: string;
  subtitle: string;
  filename: string;
  hint: string;
  code: string;
}

export interface CredentialInfo {
  kind: string;
  name: string;
  placeholder: string;
  description: string;
  required: boolean;
  secret: boolean;
  obtain_at: string | null;
}

export interface HealthInfo {
  status: string;
  consecutive_failures: number;
  last_success: string | null;
}

export interface ServerEntry {
  name: string;
  display_name: string;
  description: string;
  description_en?: string;
  version: string;
  homepage: string;
  repository?: string;
  repository_subfolder?: string;
  vendor: string;
  transport: Transport;
  tools: ToolInfo[];
  categories: string[];
  tags: string[];
  official: boolean;
  verified: boolean;
  clients: string[];
  license: string;
  last_checked: string;
  slug: string;
  icon: string;
  detail_path: string;
  possibly_broken: boolean;
  health: HealthInfo | null;
  install: InstallConfig[];
  credentials: CredentialInfo[];
  auth_note: string;
}

export interface SiteInfo {
  name: string;
  origin: string;
  base: string;
  repo_url: string | null;
  submit_url: string | null;
  generated_at: string;
}

export interface MarketData {
  schema_version: string;
  generated_at: string;
  site: SiteInfo;
  count: number;
  stats: {
    official: number;
    verified: number;
    tools: number;
  };
  facets: {
    categories: Array<{ name: string; count: number }>;
    tags: Array<{ name: string; count: number }>;
  };
  entries: ServerEntry[];
}
