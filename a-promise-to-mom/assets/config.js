/* Set only after the receiving service and privacy terms have been reviewed.
   POST JSON contract: inquiry fields + requestId + source + submittedAt.
   Receiver must validate fields and consent server-side, deduplicate requestId,
   and return HTTP 2xx with {"ok":true,"requestId":"<matching ID>"}.
   Keep this blank for an honest, non-submitting design preview. */
window.PROMISE_CONFIG = { inquiryEndpoint: '' };
