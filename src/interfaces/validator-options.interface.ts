export interface ValidatorOptions {
  /**
   * Defaults to false. In debug mode matching doesn't stop on the first
   * failed assertion, but continues and logs the list of validation errors to the console.
   */
  debugMode: boolean;

  /**
   * Defaults to false. If set to true, it will match wrapper classes for the primitive types.
   *
   * Note: This value can be overwritten when it configured on the type guards calls in a schema.
   */
  matchWrapper: boolean;
}
