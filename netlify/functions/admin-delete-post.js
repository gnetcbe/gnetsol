const { createClient } = require("@supabase/supabase-js");
const { verifyToken } = require("./_auth");

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SECRET_KEY
);

exports.handler = async (event) => {
  try {
    await verifyToken(event.headers.authorization);

    const { id } = JSON.parse(event.body);

    if (!id) throw new Error("Post ID required");

    const { error } = await supabase.from("posts").delete().eq("id", id);

    if (error) throw error;

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    return {
      statusCode: 401,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
