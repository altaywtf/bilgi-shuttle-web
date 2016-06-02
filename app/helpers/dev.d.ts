/**
 * Type declerations for global development variables
 */

interface Window {
  __INITIAL_STATE__?: any;
}

interface ObjectConstructor {
  assign(target: any, ...sources: any[]): any;
}
