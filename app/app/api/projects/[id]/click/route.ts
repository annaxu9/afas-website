import { createClient } from "@supabase/supabase-js";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    console.log("API CLICK ID:", id);
    console.log(
      "HAS SERVICE ROLE KEY:",
      !!process.env.SUPABASE_SERVICE_ROLE_KEY,
    );

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
    );

    const { error } = await supabase.rpc("increment_clicks", {
      project_id: id,
    });

    if (error) {
      console.error("SUPABASE RPC ERROR:", error);
      return Response.json(
        { error: error.message, details: error },
        { status: 500 },
      );
    }

    return Response.json({ success: true, id });
  } catch (err) {
    console.error("ROUTE ERROR:", err);
    return Response.json(
      { error: err instanceof Error ? err.message : "Unknown error" },
      { status: 500 },
    );
  }
}
