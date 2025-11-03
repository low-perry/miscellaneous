#!/bin/bash

OUTPUT_DIR="./findings/db-snapshots"
COMPARISON_FILE="${OUTPUT_DIR}/comparison_report_$(date +%Y%m%d_%H%M%S).txt"

echo "=== Database Changes Comparison Report ===" | tee "${COMPARISON_FILE}"
echo "Generated: $(date)" | tee -a "${COMPARISON_FILE}"
echo "" | tee -a "${COMPARISON_FILE}"

# Find the most recent before and after files
BEFORE_TABLES=$(ls -t "${OUTPUT_DIR}"/tables_before_*.txt 2>/dev/null | head -1)
AFTER_TABLES=$(ls -t "${OUTPUT_DIR}"/tables_after_*.txt 2>/dev/null | head -1)

if [ -z "$BEFORE_TABLES" ] || [ -z "$AFTER_TABLES" ]; then
    echo "ERROR: Missing before/after snapshot files" | tee -a "${COMPARISON_FILE}"
    exit 1
fi

echo "Comparing:" | tee -a "${COMPARISON_FILE}"
echo "  Before: $BEFORE_TABLES" | tee -a "${COMPARISON_FILE}"
echo "  After:  $AFTER_TABLES" | tee -a "${COMPARISON_FILE}"
echo "" | tee -a "${COMPARISON_FILE}"

# Compare tables
echo "--- New Tables Added ---" | tee -a "${COMPARISON_FILE}"
comm -13 <(sort "$BEFORE_TABLES") <(sort "$AFTER_TABLES") | tee -a "${COMPARISON_FILE}"
echo "" | tee -a "${COMPARISON_FILE}"

echo "--- Tables Removed ---" | tee -a "${COMPARISON_FILE}"
comm -23 <(sort "$BEFORE_TABLES") <(sort "$AFTER_TABLES") | tee -a "${COMPARISON_FILE}"
echo "" | tee -a "${COMPARISON_FILE}"

# Compare OAuth consumers
BEFORE_OAUTH=$(ls -t "${OUTPUT_DIR}"/oauth_consumers_before_*.txt 2>/dev/null | head -1)
AFTER_OAUTH=$(ls -t "${OUTPUT_DIR}"/oauth_consumers_after_*.txt 2>/dev/null | head -1)

if [ -n "$BEFORE_OAUTH" ] && [ -n "$AFTER_OAUTH" ]; then
    echo "--- OAuth Consumer Changes ---" | tee -a "${COMPARISON_FILE}"
    diff -u "$BEFORE_OAUTH" "$AFTER_OAUTH" | tee -a "${COMPARISON_FILE}"
    echo "" | tee -a "${COMPARISON_FILE}"
fi

# Compare integrations
BEFORE_INT=$(ls -t "${OUTPUT_DIR}"/integrations_before_*.txt 2>/dev/null | head -1)
AFTER_INT=$(ls -t "${OUTPUT_DIR}"/integrations_after_*.txt 2>/dev/null | head -1)

if [ -n "$BEFORE_INT" ] && [ -n "$AFTER_INT" ]; then
    echo "--- Integration Changes ---" | tee -a "${COMPARISON_FILE}"
    diff -u "$BEFORE_INT" "$AFTER_INT" | tee -a "${COMPARISON_FILE}"
    echo "" | tee -a "${COMPARISON_FILE}"
fi

# Compare config
BEFORE_CONFIG=$(ls -t "${OUTPUT_DIR}"/config_before_*.txt 2>/dev/null | head -1)
AFTER_CONFIG=$(ls -t "${OUTPUT_DIR}"/config_after_*.txt 2>/dev/null | head -1)

if [ -n "$BEFORE_CONFIG" ] && [ -n "$AFTER_CONFIG" ]; then
    echo "--- Configuration Changes ---" | tee -a "${COMPARISON_FILE}"
    diff -u "$BEFORE_CONFIG" "$AFTER_CONFIG" | tee -a "${COMPARISON_FILE}"
    echo "" | tee -a "${COMPARISON_FILE}"
fi

echo "=== Comparison Complete ===" | tee -a "${COMPARISON_FILE}"
echo "Report saved to: ${COMPARISON_FILE}" | tee -a "${COMPARISON_FILE}"
