/*!
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

/**
 * `NavigationItem` generation strategy
 */
import {NavigationItem} from '../../interfaces';

export interface NavigationItemGenerationStrategy {
  labelGeneratorFn: (name: string, firstLine?: string) => string;
  pathPrefix: string;
  contentPath: string;
  getBadgeType?: (filePath: string) => NavigationItem['badge'] | undefined; // Added getBadgeType function
}

/** Strategy for navigation item generation. */
export type Strategy = 'errors' | 'extended-diagnostics';
